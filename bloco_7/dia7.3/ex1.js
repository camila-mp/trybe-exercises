const assert = require('assert');

function sum(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('parameters must be numbers');
  }

  return a + b;
}

assert.strictEqual(sum(4, 5), 9, '9 mais 5 é igual a nove');

assert.strictEqual(sum(0, 0), 0);

assert.throws(() => {
    sum(4, '5');
});

assert.throws(() => {
    sum(4, '5');
  }, /^Error: parameters must be numbers$/);
// implemente seus testes aqui