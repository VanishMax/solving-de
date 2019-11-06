import {methodsCanvas, localCanvas} from './config';
import SolutionChart from './solution';
import Variant from './variant';
import LocalErrorChart from './local-error';

let variant, solution, localError;

window.onload = function() {

  // Create the instance of the variant and the instances
  // of graphs to be built from the variant
  variant = new Variant(11);
  solution = new SolutionChart(methodsCanvas, variant);
  localError = new LocalErrorChart(localCanvas, variant, solution);

  // Listen for all event of changing variant, grid size or initial values
  document.getElementById('x0').addEventListener('input', (e) => changeInitial(e, 'x'));
  document.getElementById('y0').addEventListener('input', (e) => changeInitial(e, 'y'));
  document.getElementById('grid').addEventListener('input', changeGrid);
  document.getElementById('grid-num').addEventListener('input', changeGrid);
  document.getElementById('variant').addEventListener('change', changeVariant);

  document.querySelectorAll('.tab').forEach(el => {
    el.addEventListener('click', changeTab);
  })
};

const updateAll = () => {
  solution.update();
  localError.update();
};

const changeGrid = e => {
  variant.changeGrid(e.target.value);
  updateAll()
};

const changeInitial = (e, name) => {
  if (name === 'x') variant.changeInitials({x: e.target.value, y: variant.y0});
  if (name === 'y') variant.changeInitials({y: e.target.value, x: variant.x0});
  updateAll()
};

const changeVariant = e => {
  variant.changeVar(e.target.value);
  updateAll();
};

const changeTab = e => {
  document.querySelectorAll('.tab').forEach(el => {
    if (el.classList.contains('active')) {
      el.classList.toggle('active');
    }
  });

  let activeTab = e.target.getAttribute('data-tab');
  e.target.classList.toggle('active');

  document.querySelectorAll('canvas').forEach(el => {
    if (el.getAttribute('data-tab') === activeTab) {
      el.classList.add('active');
    } else {
      el.classList.remove('active');
    }
  });
};
