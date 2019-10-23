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

const randColor = () => {
  const MAX_COLOR_NUM = 255;
  const red = Math.floor(MAX_COLOR_NUM * Math.random());
  const green = Math.floor(MAX_COLOR_NUM * Math.random());
  const blue = Math.floor(MAX_COLOR_NUM * Math.random());
  return `rgb(${red}, ${green}, ${blue})`;
};
