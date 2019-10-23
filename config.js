let canvas = document.getElementById('canvas');

const methods = [{
    name: 'euler',
    color: 'rgb(255, 99, 132)',
  }, {
    name: 'improved-euler',
    color: 'rgb(255, 205, 86)'
  }, {
    name: 'runge-kutta',
    color: 'rgb(255, 159, 64)'
  }];

const datasetConfig = (color) => ({
  fill: false,
  borderColor: color,
  backgroundColor: color,
  pointBorderColor: color,
  pointBackgroundColor: color,
  borderWidth: 1
});

const options = {
  responsive: true,
  title: {
    display: false,
    text: ''
  },
  animation: {
    duration: 0
  },
  tooltips: {
    mode: 'index',
    intersect: false,
  },
  hover: {
    mode: 'nearest',
    intersect: true
  },
  scales: {
    xAxes: [{
      type: 'linear',
      position: 'bottom',
      ticks: { beginAtZero: true },
      scaleLabel: {
        display: true,
        labelString: 'X'
      }
    }],
    yAxes: [{
      display: true,
      ticks: { beginAtZero: true },
      scaleLabel: {
        display: true,
        labelString: 'Y'
      }
    }]
  }
};

const variants = {
  1: '1 + 2*(y/x)',
  2: 'y/x - x * Math.exp(y/x)',
  3: '1/Math.cos(x) - y * Math.tan(x)',
  4: '2 * Math.pow(x, 3) + 2 * (y/x)',
  5: 'y/x + x * Math.cos(x)',
  6: '(2 * x) / (x*x + y)',
  7: '1/x + (2 * y) / (x * Math.log(x))',
  8: 'y*y * Math.exp(x) - 2 * y',
  9: '4 / (x*x) - y/x - y*y',
  10: '-((y*y) / 3) - 2/(3 * x*x)',
  11: '(2*x+1)*(y/x) - (y*y)/x - x',
  12: '5 - x*x - y*y +2 * x * y',
  13: 'Math.exp(2*x) + Math.exp(x) + y*y - 2 * y * Math.exp(x)',
  14: '(1 + y/x) * Math.log((x + y)/x) + y/x',
  15: '1/(x + 1) + 1/y',
  16: 'Math.exp(y) − 2/x',
  17: '3 * Math.pow(y, 2/3)',
  18: '(y*y - y) / x',
  19: '2 * x + y - 3',
  20: '(2 - y*y) / (2 * x*x * y)',
  21: 'y/x - y - x',
  22: '(3 * y + 2 * x * y) / (x*x)',
  23: 'Math.pow(y - x, 1/2) / Math.pow(x, 1/2) + 1',
  24: '2 * Math.cos(x) / Math.pow(x, 1/2) - 2 * (y/x)',
  25: '3*y - x * Math.pow(y, 1/3)',
};

const randColor = () => {
  const MAX_COLOR_NUM = 255;
  const red = Math.floor(MAX_COLOR_NUM * Math.random());
  const green = Math.floor(MAX_COLOR_NUM * Math.random());
  const blue = Math.floor(MAX_COLOR_NUM * Math.random());
  return `rgb(${red}, ${green}, ${blue})`;
};
