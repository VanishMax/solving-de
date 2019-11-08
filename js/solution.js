import {datasetConfig, methods, options, LOOP_ROUNDING} from './config';

export default class SolutionChart {
  constructor(id, variant) {
    this.variant = variant;
    this.chart = new Chart(document.getElementById(id), {
      type: 'line',
      data: {
        datasets: []
      },
      options: options
    });
    this.update();
  }

  method(name) {
    let {x0, y0, grid, n} = this.variant;
    // TODO: check if I need to change the line to (n - x0) / grid
    switch (name) {
      case 'euler':
        return this.euler();
      case 'improved-euler':
        return this.improvedEuler();
      case 'runge-kutta':
        return this.rungeKutta();
      case 'exact':
        return this.exact();
      default:
        break;
    }
  }

  exact() {
    let {x0, y0, n} = this.variant;
    let {h} = this;

    let points = [];
    const c = this.constant(x0, y0);
    while (x0 <= n + LOOP_ROUNDING) {
      points.push({
        x: x0.toFixed(4),
        y: this.exactFunc(x0, c).toFixed(4),
      });
      x0 = x0 + h;
    }
    return points;
  };

  euler() {
    let {x0, y0, n} = this.variant;
    let {h} = this;

    let points = [];
    while (x0 <= n + LOOP_ROUNDING) {
      points.push({
        x: x0.toFixed(4),
        y: y0.toFixed(4),
      });
      y0 = y0 + h * this.func(x0, y0);
      x0 = x0 + h;
    }
    return points;
  }

  improvedEuler() {
    let {x0, y0, n} = this.variant;
    let {h} = this;

    let points = [];
    while (x0 <= n + LOOP_ROUNDING) {
      let xNext = x0 + h;
      let yNext = y0 + h * this.func(x0, y0);
      points.push({
        x: x0.toFixed(4),
        y: y0.toFixed(4),
      });
      y0 = y0 + h/2 * (this.func(x0, y0) + this.func(xNext, yNext));
      x0 = xNext;
    }
    return points;
  };

  rungeKutta() {
    let {x0, y0, n} = this.variant;
    let {h} = this;

    let points = [];
    while (x0 <= n + LOOP_ROUNDING) {
      let k1 = h * this.func(x0, y0);
      let k2 = h * this.func(x0 + 0.5 * h, y0 + 0.5 * k1);
      let k3 = h * this.func(x0 + 0.5 * h, y0 + 0.5 * k2);
      let k4 = h * this.func(x0 + h, y0 + k3);
      points.push({
        x: x0.toFixed(4),
        y: y0.toFixed(4),
      });
      y0 = y0 + 1/6 * (k1 + 2*k2 + 2*k3 + k4);
      x0 = x0 + h;
    }
    return points;
  };


  func(x, y) {
    return eval(this.variant.func);
  }
  constant(x, y) {
    return eval(this.variant.const);
  };
  exactFunc(x, c) {
    return eval(this.variant.exact);
  };

  update() {
    this.h = this.variant.n / this.variant.grid;

    let data = [];
    for (let mtd of methods) {
      data.push({
        label: mtd.name,
        data: this.method(mtd.name),
        ...datasetConfig(mtd.color),
      })
    }

    this.data = data;
    this.chart.data.datasets = data;
    this.chart.update();
  }

  // globalError() {
  //
  // }
}
