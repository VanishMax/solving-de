let canvas = document.getElementById('canvas');

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
    display: true,
    text: ''
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
