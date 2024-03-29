import {datasetConfig, methods, options} from './config';

export default class LocalErrorChart {
  constructor(id, solution) {
    this.solution = solution;
    this.chart = new Chart(document.getElementById(id), {
      type: 'line',
      data: {
        datasets: []
      },
      options: options('X', 'Difference')
    });
  }

  local(name) {
    const {data} = this.solution;
    const exact = data.find(x => x.label === 'exact');
    const equation = data.find(x => x.label === name);
    return equation.data.map((point, i) => {
      return {
        x: point.x,
        y: Math.abs(exact.data[i].y - point.y),
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
