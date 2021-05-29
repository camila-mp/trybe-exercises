const assert = require('assert');

const names = [
  'Aanemarie', 'Adervandes', 'Akifusa',
  'Abegildo', 'Adicellia', 'Aladonata',
  'Abeladerco', 'Adieidy', 'Alarucha',
];

// Dada o array de nomes, retorne a quantidade de vezes em que aparecem a letra a maiúscula ou minúscula.

function containsA() {
  const counter = (acumulador, string) => {
    return acumulador += string.match(/a/gi).length;
  }
  return names.reduce(counter, 0);
};

assert.deepStrictEqual(containsA(), 20);