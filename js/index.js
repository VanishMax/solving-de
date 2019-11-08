import {methodsCanvas, localCanvas, globalCanvas} from './config';
import Document from './document';
import Variant from './variant';
import SolutionChart from './solution';
import LocalErrorChart from './local-error';
import GlobalErrorChart from './global-error';

window.onload = function () {

  let variant = new Variant(11);
  let solution = new SolutionChart(methodsCanvas, variant);
  let localError = new LocalErrorChart(localCanvas, solution);
  let globalError = new GlobalErrorChart(globalCanvas, variant, solution);
  let doc = new Document(variant, solution, localError, globalError);

  document.querySelector('body').classList.add('active');

  // Listen for all event of changing variant, grid size or initial values
  document.getElementById('x0').addEventListener('input', (e) => doc.changeInitial(e, 'x'));
  document.getElementById('y0').addEventListener('input', (e) => doc.changeInitial(e, 'y'));
  document.getElementById('grid').addEventListener('input',(e) => doc.changeGrid(e));
  document.getElementById('grid-num').addEventListener('input', (e) => doc.changeGrid(e));
  document.getElementById('variant').addEventListener('change', (e) => doc.changeVariant(e));

  // Change display of charts
  document.querySelectorAll('.tab').forEach(el => {
    el.addEventListener('mousedown', (e) => doc.changeTab(e));
    el.addEventListener('mouseup', (e) => doc.changeTab(e));
    el.addEventListener('click', (e) => doc.changeTab(e));
  })
};
