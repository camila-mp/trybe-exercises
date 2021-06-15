const { test, expect } = require("@jest/globals");
const uppercase = require('./exercicio1');

test('testando se a função retorna a string em letras maiusculas', (done) => {
    expect(uppercase('test', (str) => {
        expect(str).toBe('TEST');
        done();
    }))
})