// Desenvolva uma HOF que retorna o resultado de um sorteio. Esta HOF irá gerar um número aleatório entre 1 e 5 recebendo como parâmetros o número apostado e uma função que checa se o número apostado é igual ao número sorteado. O retorno da sua HOF deve ser uma string (Ex: "Tente novamente" ou "Parabéns você ganhou").

const checaNumeros = (num1, num2) => {
    if (num1 === num2){
        return 'Parabéns, você ganhou!';
    } else {
        return 'Tente novamente!';
    }
};

const resultSorteio = (numApostado, callback) => {
    let numSort = Math.floor(Math.random() * 6);
    return checaNumeros(numApostado, numSort);
};

console.log(resultSorteio(5, checaNumeros));