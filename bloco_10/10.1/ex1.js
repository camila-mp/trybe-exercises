// Teste se o retorno de sum(4, 5) é 9

function sum(a, b) {
    if (typeof a !== 'number' || typeof b !== 'number') {
      throw new Error('parameters must be numbers');
    }
    return a + b;
  }
  
module.exports = sum;