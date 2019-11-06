import {methodsCanvas} from './config';
import SolutionChart from './solution';
import Variant from './variant';

let variant, solution;

window.onload = function() {

  // Create the instance of the variant and the instances
  // of graphs to be built from the variant
  variant = new Variant(11);
  solution = new SolutionChart(methodsCanvas, variant);


  // localChart = new Chart(localCanvas, {
  //   type: 'line',
  //   data: {
  //     datasets: []
  //   },
  //   options: options
  // });
  // updateErrors();
};

const updateAll = () => {
  solution.update(variant);
};
