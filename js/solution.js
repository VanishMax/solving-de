import {datasetConfig, gridNum, methods, options, variant, variants} from '../code/config';

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
    console.log(this.variant);
    // this.update();
  }

  build() {
    let data = [];
    for (mtd of methods) {
      let tmp = this.method(mtd.name);
      previousState[mtd.name] = tmp;
      data.push({
        label: mtd.name,
        data: tmp,
        ...datasetConfig(mtd.color),
      })
    }
    return data;
  }

  method(name) {
    let {x0, y0, grid, n} = this.variant;
    // TODO: check if I need to change the line to (n - x0) / grid
    const h = n / grid;
    switch (name) {
      case 'euler':
        return this.euler(h);
      case 'improved-euler':
        return this.improvedEuler(h);
      case 'runge-kutta':
        return this.rungeKutta(h);
      case 'exact':
        return this.exact(h);
      default:
        break;
    }
  }

  euler(h) {
    let {x0, y0, n} = this.variant;
    let points = [];

    while (x0 <= n) {
      points.push({
        x: x0,
        y: y0,
      });
      y0 = y0 + h * this.func(x0, y0);
      x0 = x0 + h;
    }
    return points;
  }

  func(x, y) {
    return eval(this.variant.func);
  }

  update() {
    this.chart.update(this.build());
  }
}
