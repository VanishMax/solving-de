// import {options, datasetConfig, gridNum, canvas} from './config';
// import {method} from './methods';

let methodsChart;
let localChart;

window.onload = function() {

  // My default variant is 11
  changeInitials(variants[variant]);
  document.getElementById('equation').innerHTML = variants[variant].func;
  document.getElementById('variant').value = variant;
  document.querySelector('#grid').value = gridNum;
  document.querySelector('#grid-num').value = gridNum;

  methodsChart = new Chart(methodsCanvas, {
    type: 'line',
    data: {
      datasets: []
    },
    options: options
  });
  updateMethods();

  localChart = new Chart(localCanvas, {
    type: 'line',
    data: {
      datasets: []
    },
    options: options
  });
  updateErrors();
};

const updateMethods = () => {
  methodsChart.data.datasets = getData('methods', parseFloat(x0), parseFloat(y0), parseFloat(gridNum));
  methodsChart.update();
};

const updateErrors = () => {
  localChart.data.datasets = getData('local', parseFloat(x0), parseFloat(y0), parseFloat(gridNum));
  localChart.update();
};

const updateAll = () => {
  updateMethods();
  updateErrors();
};

const changeGrid = e => {
  document.querySelector('#grid').value = e.target.value;
  document.querySelector('#grid-num').value = e.target.value;
  gridNum = e.target.value;
  updateAll()
};

const changeInitial = (e, name) => {
  if (name === 'x') changeInitials({x: e.target.value, y: y0});
  if (name === 'y') changeInitials({y: e.target.value, x: x0});
  updateAll()
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
  updateAll();
};
