const { test, expect } = require('@jest/globals');
const exercicio123 = require("./exercicio123");

// 3 - Ainda com a mesma função do primeiro exercício, utilizando o mock, crie uma nova implementação que receba três parâmetros e retorne sua multiplicação. Após fazer os devidos testes para ela, resete sua implementação e crie uma nova, que receba um parâmetro e retorne seu dobro. Faça os testes necessários.


describe("testando funções mockadas", () => {
  test("mockando função para ela retornar 10", () => {
    exercicio123.getRandomNum = jest.fn().mockReturnValue(10);
    expect(exercicio123.getRandomNum()).toBe(10);
    expect(exercicio123.getRandomNum).toHaveBeenCalled();
    expect(exercicio123.getRandomNum).toHaveBeenCalledTimes(1);
  });
  test("mockando função para ela receber 2 parametros e retornar a divisao do primeiro pelo segundo", () => {
    exercicio123.getRandomNum = jest.fn().mockImplementationOnce((a, b) => a / b);
    expect(exercicio123.getRandomNum(20, 2)).toBe(10);
    expect(exercicio123.getRandomNum).toHaveBeenCalled();
    expect(exercicio123.getRandomNum).toHaveBeenCalledTimes(1);
    expect(exercicio123.getRandomNum).toHaveBeenCalledWith(20, 2);
  });

  test("mockando função para ela receber 3 parametros e retornar a multiplicação dos 3; em seguida fazer reset e implementar função que recebe 1 parametro e retorna o seu dobro", () => {
    exercicio123.getRandomNum = jest.fn().mockImplementationOnce((a, b, c) => a * b * c);
    expect(exercicio123.getRandomNum(1, 2, 3)).toBe(6);
    expect(exercicio123.getRandomNum).toHaveBeenCalled();
    expect(exercicio123.getRandomNum).toHaveBeenCalledTimes(1);
    expect(exercicio123.getRandomNum).toHaveBeenCalledWith(1, 2, 3);

    exercicio123.getRandomNum.mockReset();
    expect(exercicio123.getRandomNum).toHaveBeenCalledTimes(0);

    exercicio123.getRandomNum = jest.fn().mockImplementationOnce((a) => 2 * a);
    expect(exercicio123.getRandomNum(2)).toBe(4);
    expect(exercicio123.getRandomNum).toHaveBeenCalled();
    expect(exercicio123.getRandomNum).toHaveBeenCalledTimes(1);
    expect(exercicio123.getRandomNum).toHaveBeenCalledWith(2);
  })
});

