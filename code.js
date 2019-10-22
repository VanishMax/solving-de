// import {options, datasetConfig, gridNum, canvas} from './config';

let gridNum = 500;
const changeGrid = e => {
  document.querySelector('#grid').value = e.target.value;
  document.querySelector('#grid-num').value = e.target.value;
  gridNum = e.target.value;
};

let x0 = 1;
let y0 = 1;
const changeInitial = (e, name) => {
  if (name === 'x') x0 = e.target.value;
  if (name === 'y') y0 = e.target.value;
};

let chart = new Chart(canvas, {
  type: 'line',
  label: 'Solution',
  data: {
    datasets: [{
      label: 'Euler',
      data: [{
        x: -1,
        y: -1,
      }, {
        x: 1,
        y: 1,
      }, {
        x: 2,
        y: 2,
      }, {
        x: 3,
        y: 4,
      }, {
        x: 4,
        y: 5,
      },],
      ...datasetConfig('rgba(54, 162, 235, 1)'),
    }]
  },
  options: options
});
