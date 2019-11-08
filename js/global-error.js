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
    this.update();
  }

  update() {
    let data = [];
    this.chart.data.datasets = data;
    this.chart.update();
  }
}
