const MAX_X = 10;

const func = (x, y) => {
  return (2*x+1)*(y/x) - (y*y)/x - x;
};

const euler = (x0, y0, n) => {
  const h = MAX_X / n;
  let points = [];
  while (x0 <= MAX_X) {
    points.push({
      x: x0,
      y: y0,
    });
    y0 = y0 + h * func(x0, y0);
    x0 = x0 + h;
  }
  console.log(points);
  return points;
};

const method = (name, x0, y0, n) => {
  switch (name) {
    case 'euler':
      return euler(x0, y0, n);
    case 'improved-euler':
      break;
    case 'runge-kutta':
      break;
    default:
      break;
  }
};
