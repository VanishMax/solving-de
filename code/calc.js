import {variants, variant, methods, datasetConfig, gridNum} from './config';
import {method} from './methods';

let previousState = {};

const localError = (name) => {
  const graph = previousState[name];
  const exact = previousState.exact;
  return graph.map((point, i) => {
    return {
      x: point.x,
      y: exact[i].y - point.y,
    };
  });
};

export const getData = (graph, x0, y0, n) => {
  const h = variants[variant].n / n;
  let data;
  switch (graph) {

    case 'methods':
      data = [];
      for (mtd of methods) {
        console.log(mtd);
        let tmp = method(mtd.name, parseFloat(x0), parseFloat(y0), parseFloat(gridNum));
        previousState[mtd.name] = tmp;
        data.push({
          label: mtd.name,
          data: tmp,
          ...datasetConfig(mtd.color),
        })
      }
      return data;

    case 'local':
      data = [];
      for (mtd of methods) {
        if (mtd.name !== 'exact') {
          data.push({
            label: mtd.name,
            data: localError(mtd.name),
            ...datasetConfig(mtd.color),
          });
        }
      }
      return data;

    // case 'global':
    //   return euler(x0, y0, h);

    default:
      break;
  }
};
