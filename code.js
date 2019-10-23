// import {options, datasetConfig, gridNum, canvas} from './config';
// import {method} from './methods';

let gridNum = 10;
let x0 = 1;
let y0 = 1;

let chart;
window.onload = function() {
  chart = new Chart(canvas, {
    type: 'line',
    label: 'Solution',
    data: {
      datasets: []
    },
    options: options
  });
  updateChart();
};

const updateChart = () => {
  chart.data.datasets = [];
  for (mtd of methods) {
    chart.data.datasets.push({
      label: mtd.name,
      data: method(mtd.name, parseFloat(x0), parseFloat(y0), parseFloat(gridNum)),
      ...datasetConfig(mtd.color),
    })
  }
  chart.update();
};

const changeGrid = e => {
  document.querySelector('#grid').value = e.target.value;
  document.querySelector('#grid-num').value = e.target.value;
  gridNum = e.target.value;
  updateChart()
};

const changeInitial = (e, name) => {
  if (name === 'x') x0 = e.target.value;
  if (name === 'y') y0 = e.target.value;
  updateChart()
};
