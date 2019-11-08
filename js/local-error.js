import {datasetConfig, methods, options} from './config';

export default class LocalErrorChart {
  constructor(id, variant, solution) {
    this.variant = variant;
    this.solution = solution;
    this.chart = new Chart(document.getElementById(id), {
      type: 'line',
      data: {
        datasets: []
      },
      options: options('X', 'Difference')
    });
    this.update();
  }

  local(name) {
    const {data} = this.solution;
    const exact = data.find(x => x.label === 'exact');
    const equation = data.find(x => x.label === name);
    return equation.data.map((point, i) => {
      return {
        x: point.x,
        y: exact.data[i].y - point.y,
      };
    });
  }

  update() {
    let data = [];
    for (let mtd of methods) {
      if (mtd.name !== 'exact') {
        data.push({
          label: mtd.name,
          data: this.local(mtd.name),
          ...datasetConfig(mtd.color),
        });
      }
    }

    this.chart.data.datasets = data;
    this.chart.update();
  }
}
