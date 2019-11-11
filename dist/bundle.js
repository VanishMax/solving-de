!function(t){var e={};function n(a){if(e[a])return e[a].exports;var r=e[a]={i:a,l:!1,exports:{}};return t[a].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=t,n.c=e,n.d=function(t,e,a){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(n.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)n.d(a,r,function(e){return t[e]}.bind(null,r));return a},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="/dist/",n(n.s=2)}([function(t,e,n){"use strict";n.d(e,"f",(function(){return a})),n.d(e,"d",(function(){return r})),n.d(e,"c",(function(){return o})),n.d(e,"a",(function(){return c})),n.d(e,"e",(function(){return i})),n.d(e,"b",(function(){return u})),n.d(e,"g",(function(){return l})),n.d(e,"h",(function(){return s}));var a="methods",r="local-error",o="global-error",c=.005,i=[{name:"euler",color:"rgb(255, 99, 132)"},{name:"improved-euler",color:"rgb(255, 205, 86)"},{name:"runge-kutta",color:"rgb(255, 159, 64)"},{name:"exact",color:"rgb(255, 50, 300)"}],u=function(t){return{fill:!1,borderColor:t,backgroundColor:t,pointBorderColor:t,pointBackgroundColor:t,borderWidth:1}},l=function(t,e){return{responsive:!0,title:{display:!1,text:""},animation:{duration:0},tooltips:{mode:"index",intersect:!1},hover:{mode:"nearest",intersect:!0},scales:{xAxes:[{type:"linear",position:"bottom",ticks:{beginAtZero:!0},scaleLabel:{display:!0,labelString:t||"X"}}],yAxes:[{display:!0,ticks:{beginAtZero:!0},scaleLabel:{display:!0,labelString:e||"Y"}}]}}},s={1:{func:"1 + 2*(y/x)",exact:"c*x*x - x",const:"(y+x)/(x*x)",x:1,y:2,n:10},2:{func:"y/x - x * Math.exp(y/x)",exact:"-1*x*Math.log(c+x)",const:"Math.exp(-y/x) - x",x:0,y:1,n:8},3:{func:"1/Math.cos(x) - y * Math.tan(x)",exact:"c*Math.cos(x) + Math.sin(x)",const:"(y - Math.sin(x)) / Math.cos(x)",x:0,y:1,n:7},4:{func:"2 * Math.pow(x, 3) + 2 * (y/x)",exact:"c*x*x + Math.pow(x, 4)",const:"(y - Math.pow(x, 4)) / Math.pow(x, 2)",x:1,y:2,n:10},5:{func:"y/x + x * Math.cos(x)",exact:"c*x + x*Math.sin(x)",const:"(y - x*Math.sin(x)) / x",x:3.14,y:1,n:12.56},6:{func:"(2 * x) * (x*x + y)",exact:"c*Math.exp(x*x) - x*x - 1",const:"(y + x*x + 1) / Math.exp(x*x)",x:0,y:0,n:10},7:{func:"1/x + (2 * y) / (x * Math.log(x))",exact:"c*Math.pow(Math.log(x), 2) - Math.log(x)",const:"(y + Math.log(x)) / Math.pow(Math.log(x), 2)",x:2,y:0,n:12},8:{func:"y*y * Math.exp(x) - 2 * y",exact:"Math.exp(-x) / (c*Math.exp(x) + 1)",const:"(Math.exp(-x) - y) / (y*Math.exp(x))",x:-4,y:1,n:4},9:{func:"4 / (x*x) - y/x - y*y",exact:"",const:"",x:1,y:0,n:7},10:{func:"-((y*y) / 3) - 2/(3 * x*x)",exact:"",const:"",x:1,y:2,n:5},11:{func:"x*y - x*Math.pow(y, 3)",exact:"Math.exp(1/2 * x*x) / Math.sqrt(c + Math.exp(x*x))",const:"Math.exp(1/4 * Math.pow(x, 4)) / Math.pow(y, 2) - Math.exp(x*x)",x:0,y:Math.sqrt(.5),n:3},12:{func:"5 - x*x - y*y +2 * x * y",exact:"(1/ (c*Math.exp(4*x) - 0.25)) + x + 2",const:"(0.5 + 0.25*y - 0.25*x) / (Math.exp(4*x)*(y - x - 2))",x:0,y:1,n:20},13:{func:"Math.exp(2*x) + Math.exp(x) + y*y - 2 * y * Math.exp(x)",exact:"(1 / (c - x)) + Math.exp(x)",const:"(1 + x*y - x*Math.exp(x)) / (y - Math.exp(x))",x:0,y:0,n:15},14:{func:"(1 + y/x) * Math.log((x + y)/x) + y/x",exact:"x * (Math.exp(c*x) - 1)",const:"Math.log(y/x + 1) / x",x:1,y:2,n:6},15:{func:"Math.exp(x) - y",exact:"c*Math.exp(-x) + Math.exp(x)",const:"(y-Math.exp(x)) / Math.exp(-x)",x:0,y:0,n:7},16:{func:"Math.exp(y) - 2/x",exact:"-1 * Math.log(c*x*x + x)",const:"(Math.exp(-y) - x) / (x*x)",x:1,y:-2,n:7},17:{func:"3 * Math.pow(y, 2/3)",exact:"c*x*x + (1/3)*c*c*x + (1/27)*Math.pow(c, 3) + Math.pow(x, 3)",const:"-3*x + Math.pow(27*y, 1/3)",x:2,y:0,n:10},18:{func:"(y*y - y) / x",exact:"1 / (c*x + 1)",const:"(1-y)/(x*y)",x:1,y:.5,n:9},19:{func:"2 * x + y - 3",exact:"c*Math.exp(x) - 2*x + 1",const:"(y + 2*x - 1) / Math.exp(x)",x:1,y:1,n:7},20:{func:"(2 - y*y) / (2 * x*x * y)",exact:"-Math.pow(Math.exp(c + 1/x) + 2, 1/2) + 3.25",const:"Math.log(y*y + 2) - 1/x",x:1,y:1,n:6},21:{func:"y/x - y - x",exact:"x*c*Math.exp(-x) - x",const:"(y+x) / (x*Math.exp(-x))",x:1,y:0,n:10},22:{func:"(3 * y + 2 * x * y) / (x*x)",exact:"c*Math.exp(-3/x)*x*x",const:"y / (Math.exp(-3/x)*x*x)",x:1,y:1,n:6},23:{func:"Math.pow(y - x, 1/2) / Math.pow(x, 1/2) + 1",exact:"2*x - 2*Math.exp(-c/2)*Math.pow(x, 1/2) + 1",const:"-2*Math.log((y-2*x-1)/(-2*Math.pow(x, 1/2)))",x:1,y:10,n:15},24:{func:"(2 * Math.pow(y, 1/2) * Math.cos(x)) / x - 2 * (y / x)",exact:"",const:"",x:3.14,y:2,n:5*3.14},25:{func:"3*y - x * Math.pow(y, 1/3)",exact:"Math.pow(c*Math.exp(2*x) + 2*x + 1, 3/2) / (6*Math.pow(6, 1/2))",const:"(Math.pow(6*y*Math.pow(6, 1/2), 2/3) - 2*x - 1) / Math.exp(2*x)",x:1,y:2,n:6}}},function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",(function(){return SolutionChart}));var _config__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(0);function ownKeys(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function _objectSpread(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?ownKeys(n,!0).forEach((function(e){_defineProperty(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):ownKeys(n).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function _defineProperty(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function _classCallCheck(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function _defineProperties(t,e){for(var n=0;n<e.length;n++){var a=e[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(t,a.key,a)}}function _createClass(t,e,n){return e&&_defineProperties(t.prototype,e),n&&_defineProperties(t,n),t}var SolutionChart=function(){function SolutionChart(t,e){_classCallCheck(this,SolutionChart),this.variant=e,this.chart=new Chart(document.getElementById(t),{type:"line",data:{datasets:[]},options:Object(_config__WEBPACK_IMPORTED_MODULE_0__.g)()})}return _createClass(SolutionChart,[{key:"method",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1];switch(t){case"euler":return this.euler(e);case"improved-euler":return this.improvedEuler(e);case"runge-kutta":return this.rungeKutta(e);case"exact":return this.exact(e)}}},{key:"exact",value:function(t){for(var e=this.variant,n=e.x0,a=e.y0,r=e.n,o=this.h,c=[],i=this.constant(n,a);n<=r+_config__WEBPACK_IMPORTED_MODULE_0__.a;)c.push({x:n.toFixed(4),y:this.exactFunc(n,i).toFixed(4)}),n+=o;return t?c[c.length-1]:c}},{key:"euler",value:function(t){for(var e=this.variant,n=e.x0,a=e.y0,r=e.n,o=this.h,c=[];n<=r+_config__WEBPACK_IMPORTED_MODULE_0__.a;)c.push({x:n.toFixed(4),y:a.toFixed(4)}),a+=o*this.func(n,a),n+=o;return t?c[c.length-1]:c}},{key:"improvedEuler",value:function(t){for(var e=this.variant,n=e.x0,a=e.y0,r=e.n,o=this.h,c=[];n<=r+_config__WEBPACK_IMPORTED_MODULE_0__.a;){var i=n+o,u=a+o*this.func(n,a);c.push({x:n.toFixed(4),y:a.toFixed(4)}),a+=o/2*(this.func(n,a)+this.func(i,u)),n=i}return t?c[c.length-1]:c}},{key:"rungeKutta",value:function(t){for(var e=this.variant,n=e.x0,a=e.y0,r=e.n,o=this.h,c=[];n<=r+_config__WEBPACK_IMPORTED_MODULE_0__.a;){var i=o*this.func(n,a),u=o*this.func(n+.5*o,a+.5*i),l=o*this.func(n+.5*o,a+.5*u),s=o*this.func(n+o,a+l);c.push({x:n.toFixed(4),y:a.toFixed(4)}),a+=1/6*(i+2*u+2*l+s),n+=o}return t?c[c.length-1]:c}},{key:"func",value:function func(x,y){return eval(this.variant.func)}},{key:"constant",value:function constant(x,y){return eval(this.variant.const)}},{key:"exactFunc",value:function exactFunc(x,c){return eval(this.variant.exact)}},{key:"update",value:function(){this.h=this.variant.n/this.variant.grid;var t=[],e=!0,n=!1,a=void 0;try{for(var r,o=_config__WEBPACK_IMPORTED_MODULE_0__.e[Symbol.iterator]();!(e=(r=o.next()).done);e=!0){var c=r.value;t.push(_objectSpread({label:c.name,data:this.method(c.name)},Object(_config__WEBPACK_IMPORTED_MODULE_0__.b)(c.color)))}}catch(t){n=!0,a=t}finally{try{e||null==o.return||o.return()}finally{if(n)throw a}}this.data=t,this.chart.data.datasets=t,this.chart.update()}},{key:"globalError",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=arguments.length>1?arguments[1]:void 0;this.h=this.variant.n/e;var n=this.method("exact",!0),a=!0,r=!1,o=void 0;try{for(var c,i=_config__WEBPACK_IMPORTED_MODULE_0__.e[Symbol.iterator]();!(a=(c=i.next()).done);a=!0){var u=c.value;"exact"!==u.name&&t[u.name].push({x:e,y:n.y-this.method(u.name,!0).y})}}catch(t){r=!0,o=t}finally{try{a||null==i.return||i.return()}finally{if(r)throw o}}return this.h=this.variant.n/this.variant.grid,t}}]),SolutionChart}()},function(t,e,n){t.exports=n(3)},function(t,e,n){"use strict";n.r(e);var a=n(0);function r(t,e){for(var n=0;n<e.length;n++){var a=e[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(t,a.key,a)}}var o=function(){function t(e,n,a,r){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.variant=e,this.solution=n,this.localError=a,this.globalError=r,this.activeTab=1,this.updateAll()}var e,n,a;return e=t,(n=[{key:"updateAll",value:function(){try{switch(parseInt(this.activeTab)){case 1:this.solution.update();break;case 2:this.localError.update();break;case 3:this.globalError.update()}}catch(t){alert("Wrong data")}}},{key:"changeGrid",value:function(t){this.variant.changeGrid(t.target.value),this.updateAll()}},{key:"changeInitial",value:function(t,e){"x"===e&&this.variant.changeInitials({x:parseFloat(t.target.value),y:this.variant.y0}),"y"===e&&this.variant.changeInitials({y:parseFloat(t.target.value),x:this.variant.x0}),this.updateAll()}},{key:"changeVariant",value:function(t){this.variant.changeVar(t.target.value),this.updateAll()}},{key:"changeTab",value:function(t){var e=this;"mouseup"===t.type?this.updateAll():"click"===t.type?document.querySelectorAll("canvas").forEach((function(t){t.getAttribute("data-tab")===e.activeTab?t.classList.add("active"):t.classList.remove("active")})):(document.querySelectorAll(".tab").forEach((function(t){t.classList.contains("active")&&t.classList.toggle("active")})),this.activeTab=t.target.getAttribute("data-tab"),t.target.classList.toggle("active"))}}])&&r(e.prototype,n),a&&r(e,a),t}();function c(t,e){for(var n=0;n<e.length;n++){var a=e[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(t,a.key,a)}}var i=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.changeGrid(50),this.changeVar(e)}var e,n,r;return e=t,(n=[{key:"changeVar",value:function(t){this.index=t,this.func=a.h[t].func,this.exact=a.h[t].exact,this.const=a.h[t].const,this.n=a.h[t].n,document.getElementById("variant").value=t,document.getElementById("equation").innerHTML=a.h[t].func,this.changeInitials(a.h[t])}},{key:"changeGrid",value:function(t){this.grid=t,document.querySelector("#grid").value=t,document.querySelector("#grid-num").value=t}},{key:"changeInitials",value:function(t){var e=t.x,n=t.y;this.x0=e,this.y0=n,document.getElementById("x0").value=e,document.getElementById("y0").value=n,document.getElementById("x0_0").innerHTML=e,document.getElementById("y0_0").innerHTML=n}}])&&c(e.prototype,n),r&&c(e,r),t}(),u=n(1);function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function s(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(n,!0).forEach((function(e){x(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(n).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function x(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function h(t,e){for(var n=0;n<e.length;n++){var a=e[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(t,a.key,a)}}var y=function(){function t(e,n){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.solution=n,this.chart=new Chart(document.getElementById(e),{type:"line",data:{datasets:[]},options:Object(a.g)("X","Difference")})}var e,n,r;return e=t,(n=[{key:"local",value:function(t){var e=this.solution.data,n=e.find((function(t){return"exact"===t.label}));return e.find((function(e){return e.label===t})).data.map((function(t,e){return{x:t.x,y:n.data[e].y-t.y}}))}},{key:"update",value:function(){var t=[],e=!0,n=!1,r=void 0;try{for(var o,c=a.e[Symbol.iterator]();!(e=(o=c.next()).done);e=!0){var i=o.value;"exact"!==i.name&&t.push(s({label:i.name,data:this.local(i.name)},Object(a.b)(i.color)))}}catch(t){n=!0,r=t}finally{try{e||null==c.return||c.return()}finally{if(n)throw r}}this.chart.data.datasets=t,this.chart.update()}}])&&h(e.prototype,n),r&&h(e,r),t}();function f(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function p(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?f(n,!0).forEach((function(e){d(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):f(n).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function d(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function v(t,e){for(var n=0;n<e.length;n++){var a=e[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(t,a.key,a)}}var g=function(){function t(e,n,r){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.variant=n,this.solution=r,this.chart=new Chart(document.getElementById(e),{type:"line",data:{datasets:[]},options:Object(a.g)("N","Error")})}var e,n,r;return e=t,(n=[{key:"update",value:function(){console.log("updating");var t={},e=!0,n=!1,r=void 0;try{for(var o,c=a.e[Symbol.iterator]();!(e=(o=c.next()).done);e=!0)t[o.value.name]=[]}catch(t){n=!0,r=t}finally{try{e||null==c.return||c.return()}finally{if(n)throw r}}for(var i=2;i<=this.variant.grid;i++)t=this.solution.globalError(t,i);var u=[],l=!0,s=!1,x=void 0;try{for(var h,y=a.e[Symbol.iterator]();!(l=(h=y.next()).done);l=!0){var f=h.value;"exact"!==f.name&&u.push(p({label:f.name,data:t[f.name]},Object(a.b)(f.color)))}}catch(t){s=!0,x=t}finally{try{l||null==y.return||y.return()}finally{if(s)throw x}}this.chart.data.datasets=u,this.chart.update()}}])&&v(e.prototype,n),r&&v(e,r),t}();window.onload=function(){var t=new i(11),e=new u.a(a.f,t),n=new y(a.d,e),r=new g(a.c,t,e),c=new o(t,e,n,r);document.querySelector("body").classList.add("active"),document.getElementById("x0").addEventListener("input",(function(t){return c.changeInitial(t,"x")})),document.getElementById("y0").addEventListener("input",(function(t){return c.changeInitial(t,"y")})),document.getElementById("grid").addEventListener("input",(function(t){return c.changeGrid(t)})),document.getElementById("grid-num").addEventListener("input",(function(t){return c.changeGrid(t)})),document.getElementById("variant").addEventListener("change",(function(t){return c.changeVariant(t)})),document.querySelectorAll(".tab").forEach((function(t){t.addEventListener("mousedown",(function(t){return c.changeTab(t)})),t.addEventListener("mouseup",(function(t){return c.changeTab(t)})),t.addEventListener("click",(function(t){return c.changeTab(t)}))}))}}]);