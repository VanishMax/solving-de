// import {options, datasetConfig, gridNum, canvas} from './config';
// import {method} from './methods';

let gridNum = 50;
let x0;
let y0;

let chart;
window.onload = function() {

  // My default variant is 11
  changeInitials(variants[11]);
  document.getElementById('equation').innerHTML = variants[11].func;

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
  if (name === 'x') changeInitials({x: e.target.value, y: y0});
  if (name === 'y') changeInitials({y: e.target.value, x: x0});
  updateChart()
};

const changeInitials = ({x, y}) => {
  x0 = x;
  y0 = y;
  document.getElementById('x0').value = x;
  document.getElementById('y0').value = y;
  document.getElementById('x0_0').innerHTML = x;
  document.getElementById('y0_0').innerHTML = y;
};

const changeVariant = e => {
  variant = e.target.value;
  document.getElementById('equation').innerHTML = variants[variant].func;
  changeInitials(variants[variant]);
  updateChart();
};
