// retorne a soma de todos os numeros pares do seguinte array

const numbers = [18, 19, 23, 53, 4, 5, 76, 23, 54];

const somaPares = (numbers) => {
  const arrayEven = numbers.filter((number) => number % 2 === 0);
  return arrayEven.reduce((acumula, numero) => acumula + numero)
}

console.log(somaPares(numbers));