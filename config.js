let methodsCanvas = document.getElementById('methods');
let localCanvas = document.getElementById('local-error');

let variant = 11;
let gridNum = 50;
let x0;
let y0;

const methods = [{
    name: 'euler',
    color: 'rgb(255, 99, 132)',
  }, {
    name: 'improved-euler',
    color: 'rgb(255, 205, 86)'
  }, {
    name: 'runge-kutta',
    color: 'rgb(255, 159, 64)'
  }, {
    name: 'exact',
    color: 'rgb(255, 50, 300)'
  }
];

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
    exact: 'c*x*x - x',
    const: '(y+x)/(x*x)',
    x: 1,
    y: 2,
    n: 10,
  },
  // TODO: check 2nd for methods
  2: {
    func: 'y/x - x * Math.exp(y/x)',
    exact: '-1*x*Math.log(c+x)',
    const: 'Math.exp(-y/x) - x',
    x: 0,
    y: 1,
    n: 8,
  },
  3: {
    func: '1/Math.cos(x) - y * Math.tan(x)',
    exact: 'c*Math.cos(x) + Math.sin(x)',
    const: '(y - Math.sin(x)) / Math.cos(x)',
    x: 0,
    y: 1,
    n: 7,
  },
  4: {
    func: '2 * Math.pow(x, 3) + 2 * (y/x)',
    exact: 'c*x*x + Math.pow(x, 4)',
    const: '(y - Math.pow(x, 4)) / Math.pow(x, 2)',
    x: 1,
    y: 2,
    n: 10,
  },
  5: {
    func: 'y/x + x * Math.cos(x)',
    exact: 'c*x + x*Math.sin(x)',
    const: '(y - x*Math.sin(x)) / x',
    x: 3.14,
    y: 1,
    n: 4*3.14,
  },
  // TODO: check 6th
  6: {
    func: '(2 * x) * (x*x + y)',
    exact: 'c*Math.exp(x*x) - x*x - 1',
    const: '(y + x*x + 1) / Math.exp(x*x)',
    x: 0,
    y: 0,
    n: 10,
  },
  7: {
    func: '1/x + (2 * y) / (x * Math.log(x))',
    exact: 'c*Math.pow(Math.log(x), 2) - Math.log(x)',
    const: '(y + Math.log(x)) / Math.pow(Math.log(x), 2)',
    x: 2,
    y: 0,
    n: 12,
  },
  8: {
    func: 'y*y * Math.exp(x) - 2 * y',
    exact: 'Math.exp(-x) / (c*Math.exp(x) + 1)',
    const: '(Math.exp(-x) - y) / (y*Math.exp(x))',
    x: -4,
    y: 1,
    n: 4,
  },
  9: {
    func: '4 / (x*x) - y/x - y*y',
    exact: '',
    const: '',
    x: 1,
    y: 0,
    n: 7,
  },
  10: {
    func: '-((y*y) / 3) - 2/(3 * x*x)',
    exact: '',
    const: '',
    x: 1,
    y: 2,
    n: 5,
  },
  11: {
    func: '(2*x+1)*(y/x) - (y*y)/x - x',
    exact: '(-x*c + x*x + x) / (x - c)',
    const: '(x*x + x - x*y) / (x - y)',
    x: 1,
    y: 1,
    n: 9,
  },
  12: {
    func: '5 - x*x - y*y +2 * x * y',
    exact: '(1/ (c*Math.exp(4*x) - 0.25)) + x + 2',
    const: '(0.5 + 0.25*y - 0.25*x) / (Math.exp(4*x)*(y - x - 2))',
    x: 0,
    y: 1,
    n: 20,
  },
  // TODO: check whole 13th variant
  13: {
    func: 'Math.exp(2*x) + Math.exp(x) + y*y - 2 * y * Math.exp(x)',
    exact: '(1 / (c - x)) + Math.exp(x)',
    const: '(1 + x*y - x*Math.exp(x)) / (y - Math.exp(x))',
    x: 0,
    y: 0,
    n: 15,
  },
  14: {
    func: '(1 + y/x) * Math.log((x + y)/x) + y/x',
    exact: 'x * (Math.exp(c*x) - 1)',
    const: 'Math.log(y/x + 1) / x',
    x: 1,
    y: 2,
    n: 6,
  },
  15: {
    func: 'Math.exp(x) - y',
    exact: 'c*Math.exp(-x) + Math.exp(x)',
    const: '(y-Math.exp(x)) / Math.exp(-x)',
    x: 0,
    y: 0,
    n: 7,
  },
  16: {
    func: 'Math.exp(y) - 2/x',
    exact: '-1 * Math.log(c*x*x + x)',
    const: '(Math.exp(-y) - x) / (x*x)',
    x: 1,
    y: -2,
    n: 7,
  },
  // TODO: check 17 for methods
  17: {
    func: '3 * Math.pow(y, 2/3)',
    exact: 'c*x*x + (1/3)*c*c*x + (1/27)*Math.pow(c, 3) + Math.pow(x, 3)',
    const: '-3*x + Math.pow(27*y, 1/3)',
    x: 2,
    y: 0,
    n: 10,
  },
  18: {
    func: '(y*y - y) / x',
    exact: '1 / (c*x + 1)',
    const: '(1-y)/(x*y)',
    x: 1,
    y: 0.5,
    n: 9,
  },
  19: {
    func: '2 * x + y - 3',
    exact: 'c*Math.exp(x) - 2*x + 1',
    const: '(y + 2*x - 1) / Math.exp(x)',
    x: 1,
    y: 1,
    n: 7,
  },
  20: {
    func: '(2 - y*y) / (2 * x*x * y)',
    exact: '-Math.pow(Math.exp(c + 1/x) + 2, 1/2) + 3.25',
    const: 'Math.log(y*y + 2) - 1/x',
    x: 1,
    y: 1,
    n: 6,
  },
  21: {
    func: 'y/x - y - x',
    exact: 'x*c*Math.exp(-x) - x',
    const: '(y+x) / (x*Math.exp(-x))',
    x: 1,
    y: 0,
    n: 10,
  },
  22: {
    func: '(3 * y + 2 * x * y) / (x*x)',
    exact: 'c*Math.exp(-3/x)*x*x',
    const: 'y / (Math.exp(-3/x)*x*x)',
    x: 1,
    y: 1,
    n: 6,
  },
  // TODO: check 23
  23: {
    func: 'Math.pow(y - x, 1/2) / Math.pow(x, 1/2) + 1',
    exact: '2*x - 2*Math.exp(-c/2)*Math.pow(x, 1/2) + 1',
    const: '-2*Math.log((y-2*x-1)/(-2*Math.pow(x, 1/2)))',
    x: 1,
    y: 10,
    n: 15,
  },
  24: {
    func: '(2 * Math.pow(y, 1/2) * Math.cos(x)) / x - 2 * (y / x)',
    exact: '',
    const: '',
    x: 3.14,
    y: 2,
    n: 5*3.14,
  },
  25: {
    func: '3*y - x * Math.pow(y, 1/3)',
    exact: 'Math.pow(c*Math.exp(2*x) + 2*x + 1, 3/2) / (6*Math.pow(6, 1/2))',
    const: '(Math.pow(6*y*Math.pow(6, 1/2), 2/3) - 2*x - 1) / Math.exp(2*x)',
    x: 1,
    y: 2,
    n: 6,
  },
};
