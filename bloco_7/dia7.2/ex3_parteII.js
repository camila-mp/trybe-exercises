// Crie uma função para mostrar o tamanho de um objeto.

const objectSize = (object) => Object.entries(object).length;

// teste

const lesson3 = {
    materia: 'Matemática',
    numeroEstudantes: 10,
    professor: 'Maria Clara',
    turno: 'noite',
  };

console.log(objectSize(lesson3));