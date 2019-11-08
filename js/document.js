export default class Document {
  constructor(variant, solution, local, global) {
    // Create the instance of the variant and the instances
    // of graphs to be built from the variant
    this.variant = variant;
    console.log(variant, this.variant);
    this.solution = solution;
    this.localError = local;
    this.globalError = global;
  }

  updateAll() {
    this.solution.update();
    this.localError.update();
    this.globalError.update();
  };

  changeGrid(e) {
    console.log(this);
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

}
