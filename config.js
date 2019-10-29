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
  1: {
    func: '1 + 2*(y/x)',
    x: 1,
    y: 2,
    n: 10,
  },
  2: {
    func: 'y/x - x * Math.exp(y/x)',
    x: 0,
    y: 1,
    n: 8,
  },
  3: {
    func: '1/Math.cos(x) - y * Math.tan(x)',
    x: 0,
    y: 1,
    n: 7,
  },
  4: {
    func: '2 * Math.pow(x, 3) + 2 * (y/x)',
    x: 1,
    y: 2,
    n: 10,
  },
  5: {
    func: 'y/x + x * Math.cos(x)',
    x: 3.14,
    y: 1,
    n: 4*3.14,
  },
  6: {
    func: '(2 * x) * (x*x + y)',
    x: 0,
    y: 0,
    n: 10,
  },
  7: {
    func: '1/x + (2 * y) / (x * Math.log(x))',
    x: 2,
    y: 0,
    n: 12,
  },
  8: {
    func: 'y*y * Math.exp(x) - 2 * y',
    x: -4,
    y: 1,
    n: 4,
  },
  9: {
    func: '4 / (x*x) - y/x - y*y',
    x: 1,
    y: 0,
    n: 7,
  },
  10: {
    func: '-((y*y) / 3) - 2/(3 * x*x)',
    x: 1,
    y: 2,
    n: 5,
  },
  11: {
    func: '(2*x+1)*(y/x) - (y*y)/x - x',
    x: 1,
    y: 1,
    n: 9,
  },
  12: {
    func: '5 - x*x - y*y +2 * x * y',
    x: 0,
    y: 1,
    n: 20,
  },
  13: {
    func: 'Math.exp(2*x) + Math.exp(x) + y*y - 2 * y * Math.exp(x)',
    x: 0,
    y: 0,
    n: 15,
  },
  14: {
    func: '(1 + y/x) * Math.log((x + y)/x) + y/x',
    x: 1,
    y: 2,
    n: 6,
  },
  15: {
    func: 'Math.exp(x) - y',
    x: 0,
    y: 0,
    n: 7,
  },
  16: {
    func: 'Math.exp(y) − 2/x',
    x: 1,
    y: -2,
    n: 7,
  },
  17: {
    func: '3 * Math.pow(y, 2/3)',
    x: 2,
    y: 0,
    n: 10,
  },
  18: {
    func: '(y*y - y) / x',
    x: 1,
    y: 0.5,
    n: 9,
  },
  19: {
    func: '2 * x + y - 3',
    x: 1,
    y: 1,
    n: 7,
  },
  20: {
    func: '(2 - y*y) / (2 * x*x * y)',
    x: 1,
    y: 1,
    n: 6,
  },
  21: {
    func: 'y/x - y - x',
    x: 1,
    y: 0,
    n: 10,
  },
  22: {
    func: '(3 * y + 2 * x * y) / (x*x)',
    x: 1,
    y: 1,
    n: 6,
  },
  23: {
    func: 'Math.pow(y - x, 1/2) / Math.pow(x, 1/2) + 1',
    x: 1,
    y: 10,
    n: 15,
  },
  24: {
    func: '(2 * Math.pow(y, 1/2) * Math.cos(x)) / x - 2 * (y / x)',
    x: 3.14,
    y: 2,
    n: 5*3.14,
  },
  25: {
    func: '3*y - x * Math.pow(y, 1/3)',
    x: 1,
    y: 2,
    n: 6,
  },
};
