const { test, expect } = require('@jest/globals');
const getUserName = require('./exercicio2');

describe('testa retorno quando o usuario é encontrado', () => {
    test('verifica retorno quando o ID é "4"', async () => {
        expect.assertions(1);
        const userName = await getUserName(4);
        expect(userName).toEqual('Mark');
    })
})

describe('testa retorno quando o usuario não é encontrado', () => {
    test('verifica retorno quando o ID é 8 (não existe)', async () => {
        expect.assertions(1);
        try{
            const userrName = await getUserName(8);
        } catch(error) {
            expect(error).toEqual({ error: 'User with 8 not found.' })
        } 
    })
})
