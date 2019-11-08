import {datasetConfig, methods, options} from './config';

export default class GlobalErrorChart {
  constructor(id, variant, solution) {
    this.variant = variant;
    this.solution = solution;
    this.chart = new Chart(document.getElementById(id), {
      type: 'line',
      data: {
        datasets: []
      },
      options: options('N', 'Error')
    });
  }

  update() {
    console.log('updating');
    let initial = {};
    for (let mtd of methods) initial[mtd.name] = [];
    for (let n = 2; n <= this.variant.grid; n++) {
      initial = this.solution.globalError(initial, n);
    }

    let data = [];
    for (let mtd of methods) {
      if (mtd.name !== 'exact') {
        data.push({
          label: mtd.name,
          data: initial[mtd.name],
          ...datasetConfig(mtd.color),
        });
      }
    }

    this.chart.data.datasets = data;
    this.chart.update();
  }
}
