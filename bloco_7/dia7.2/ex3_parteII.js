// Crie uma função para mostrar o tamanho de um objeto.

const objectSize = (object) => {
    let arrayEntries = Object.entries(object);
    let objSize = arrayEntries.length;
    return objSize;
}

// teste

const lesson3 = {
    materia: 'Matemática',
    numeroEstudantes: 10,
    professor: 'Maria Clara',
    turno: 'noite',
  };

console.log(objectSize(lesson3));