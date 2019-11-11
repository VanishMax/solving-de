import {variants} from './config';

export default class Variant {
  constructor(id) {
    this.changeGrid(50);
    this.changeVar(id);
  }

  changeVar(id) {
    this.func = variants[id].func;
    this.exact = variants[id].exact;
    this.const = variants[id].const;
    this.n = variants[id].n;

    document.getElementById('variant').value = id;
    document.getElementById('equation').innerHTML = variants[id].func;
    this.changeInitials(variants[id]);
  }

  changeGrid(num) {
    this.grid = num;
    document.querySelector('#grid').value = num;
    document.querySelector('#grid-num').value = num;
  }

  changeInitials({x, y}) {
    this.x0 = x;
    this.y0 = y;
    document.getElementById('x0').value = x;
    document.getElementById('y0').value = y;
    document.getElementById('x0_0').innerHTML = x;
    document.getElementById('y0_0').innerHTML = y;
  };
}
