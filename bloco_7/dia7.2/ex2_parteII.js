// Crie uma função para listar as keys de um objeto. Essa função deve receber um objeto como parâmetro.

const listaKeys = (objeto) => {
    let keys = Object.keys(objeto)
    return keys;
};

const lesson3 = {
    materia: 'Matemática',
    numeroEstudantes: 10,
    professor: 'Maria Clara',
    turno: 'noite',
  };

console.log(listaKeys(lesson3));

