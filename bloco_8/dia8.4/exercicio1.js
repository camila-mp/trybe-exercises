// Dada uma matriz de matrizes, transforme em uma única matriz.

const assert = require('assert');

const arrays = [
  ['1', '2', '3'],
  [true],
  [4, 5, 6],
];

function flatten() {
  return arrays.reduce((acumulador, elemento) => {
    return acumulador = acumulador.concat(elemento);
  });
};

assert.deepStrictEqual(flatten(), ['1', '2', '3', true, 4, 5, 6]);