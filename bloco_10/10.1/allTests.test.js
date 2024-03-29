// Teste se o retorno de sum(4, 5) é 9
// Teste se o retorno de sum(0, 0) é 0
// Teste se a função sum lança um erro quando os parâmetros são 4 e "5" (string 5)
// Teste se a mensagem de erro é "parameters must be numbers" quando realizar a chamada sum(4, "5")

const sum = require('./ex1');

describe('testa resultado de diferentes valores inseridos na função', () => {
  test('soma 4 e 5', () => {
    expect(sum(4, 5)).toBe(9)
  });
  test('soma 0 e 0', () => {
    expect(sum(0, 0)).toBe(0)
  });
})

describe('testa se a função lança um erro quando uma string é passada como parametro', () => {
  test('parametros 4 e "5"', () => { expect(() => { sum(4, '5') }).toThrow() 
  });
})

describe('testa se a função lança a mensagem de erro "parameters must be numbers"', () => {
  test('parametros 4 e "5"', () => { expect(() => { sum(4, '5') }).toThrowError(new Error('parameters must be numbers')) 
  });
})

const myRemove = require('./ex2');

// Verifique se a chamada myRemove([1, 2, 3, 4], 3) retorna o array esperado
// Verifique se a chamada myRemove([1, 2, 3, 4], 3) não retorna o array [1, 2, 3, 4]
// Verifique se o array passado por parâmetro não sofreu alterações
// Verifique se a chamada myRemove([1, 2, 3, 4], 5) retorna o array esperado

describe ('testa se o retorno da função é igual ao esperado', () => {
  test('testa o retorno da função com parametros [1, 2, 3, 4] e 3', () => { 
    expect(myRemove([1, 2, 3, 4], 3)).toEqual([1, 2, 4]) })
})


