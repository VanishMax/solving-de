let variant = 1;

const func = (x, y) => {
  return eval(variants[variant].func);
};

const constant = (x, y) => {
  return eval(variants[variant].const);
};

const exactFunc = (x, c) => {
  return eval(variants[variant].exact);
};

const exact = (x0, y0, h) => {
  let points = [];
  const c = constant(x0, y0);
  while (x0 <= variants[variant].n) {
    points.push({
      x: x0,
      y: exactFunc(x0, c),
    });
    x0 = x0 + h;
  }
  return points;
};

const euler = (x0, y0, h) => {
  let points = [];
  while (x0 <= variants[variant].n) {
    points.push({
      x: x0,
      y: y0,
    });
    y0 = y0 + h * func(x0, y0);
    x0 = x0 + h;
  }
  return points;
};

const improvedEuler = (x0, y0, h) => {
  let points = [];
  while (x0 <= variants[variant].n) {
    let xNext = x0 + h;
    let yNext = y0 + h * func(x0, y0);
    points.push({
      x: x0,
      y: y0,
    });
    y0 = y0 + h/2 * (func(x0, y0) + func(xNext, yNext));
    x0 = xNext;
  }
  return points;
};

const rungeKutta = (x0, y0, h) => {
  let points = [];
  while (x0 <= variants[variant].n) {
    let k1 = h * func(x0, y0);
    let k2 = h * func(x0 + 0.5 * h, y0 + 0.5 * k1);
    let k3 = h * func(x0 + 0.5 * h, y0 + 0.5 * k2);
    let k4 = h * func(x0 + h, y0 + k3);
    points.push({
      x: x0,
      y: y0,
    });
    y0 = y0 + 1/6 * (k1 + 2*k2 + 2*k3 + k4);
    x0 = x0 + h;
  }
  return points;
};

const method = (name, x0, y0, n) => {
  const h = variants[variant].n / n;
  switch (name) {
    case 'euler':
      return euler(x0, y0, h);
    case 'improved-euler':
      return improvedEuler(x0, y0, h);
    case 'runge-kutta':
      return rungeKutta(x0, y0, h);
    case 'exact':
      return exact(x0, y0, h);
    default:
      break;
  }
};
