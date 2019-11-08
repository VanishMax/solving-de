export default class Document {
  constructor(variant, solution, local, global) {
    // Create the instance of the variant and the instances
    // of graphs to be built from the variant
    this.variant = variant;
    this.solution = solution;
    this.localError = local;
    this.globalError = global;
    this.activeTab = 1;
    this.updateAll();
  }

  updateAll() {
    switch (parseInt(this.activeTab)) {
      case 1:
        this.solution.update();
        break;
      case 2:
        this.localError.update();
        break;
      case 3:
        this.globalError.update();
        break;
      default:
        break;
    }
  };

  changeGrid(e) {
    this.variant.changeGrid(e.target.value);
    this.updateAll()
  };

  changeInitial(e, name) {
    if (name === 'x') this.variant.changeInitials({x: e.target.value, y: this.variant.y0});
    if (name === 'y') this.variant.changeInitials({y: e.target.value, x: this.variant.x0});
    this.updateAll()
  };

  changeVariant(e) {
    this.variant.changeVar(e.target.value);
    this.updateAll();
  };

  changeTab(e) {
    if (e.type === 'mouseup') {
      this.updateAll();
    } else if (e.type === 'click') {
      document.querySelectorAll('canvas').forEach(el => {
        if (el.getAttribute('data-tab') === this.activeTab) {
          el.classList.add('active');
        } else {
          el.classList.remove('active');
        }
      });
    } else {
      document.querySelectorAll('.tab').forEach(el => {
        if (el.classList.contains('active')) {
          el.classList.toggle('active');
        }
      });

      this.activeTab = e.target.getAttribute('data-tab');
      e.target.classList.toggle('active');
    }
  };

}
