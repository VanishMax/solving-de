"use strict";

System.register(["./config"], function (_export, _context) {
  "use strict";

  var options, variants, variant, localCanvas, methodsCanvas, x0, y0, gridNum, methods, methodsChart, localChart, updateMethods, updateErrors, updateAll, changeGrid, changeInitial, changeInitials, changeVariant;

  _export({
    methodsChart: void 0,
    localChart: void 0
  });

  return {
    setters: [function (_config) {
      options = _config.options;
      variants = _config.variants;
      variant = _config.variant;
      localCanvas = _config.localCanvas;
      methodsCanvas = _config.methodsCanvas;
      x0 = _config.x0;
      y0 = _config.y0;
      gridNum = _config.gridNum;
      methods = _config.methods;
    }],
    execute: function () {
      window.onload = function () {
        console.log(variant, gridNum); // My default variant is 11

        changeInitials(variants[variant]);
        document.getElementById('equation').innerHTML = variants[variant].func;
        document.getElementById('variant').value = variant;
        document.querySelector('#grid').value = gridNum;
        document.querySelector('#grid-num').value = gridNum;
        methodsChart = new Chart(methodsCanvas, {
          type: 'line',
          data: {
            datasets: []
          },
          options: options
        });
        updateMethods();
        localChart = new Chart(localCanvas, {
          type: 'line',
          data: {
            datasets: []
          },
          options: options
        });
        updateErrors();
      };

      updateMethods = function updateMethods() {
        methodsChart.data.datasets = getData('methods', parseFloat(x0), parseFloat(y0), parseFloat(gridNum));
        methodsChart.update();
      };

      updateErrors = function updateErrors() {
        localChart.data.datasets = getData('local', parseFloat(x0), parseFloat(y0), parseFloat(gridNum));
        localChart.update();
      };

      updateAll = function updateAll() {
        updateMethods();
        updateErrors();
      };

      changeGrid = function changeGrid(e) {
        document.querySelector('#grid').value = e.target.value;
        document.querySelector('#grid-num').value = e.target.value;
        gridNum = e.target.value;
        updateAll();
      };

      changeInitial = function changeInitial(e, name) {
        if (name === 'x') changeInitials({
          x: e.target.value,
          y: y0
        });
        if (name === 'y') changeInitials({
          y: e.target.value,
          x: x0
        });
        updateAll();
      };

      changeInitials = function changeInitials(_ref) {
        var x = _ref.x,
            y = _ref.y;
        x0 = x;
        y0 = y;
        document.getElementById('x0').value = x;
        document.getElementById('y0').value = y;
        document.getElementById('x0_0').innerHTML = x;
        document.getElementById('y0_0').innerHTML = y;
      };

      changeVariant = function changeVariant(e) {
        variant = e.target.value;
        document.getElementById('equation').innerHTML = variants[variant].func;
        changeInitials(variants[variant]);
        updateAll();
      };
    }
  };
});
