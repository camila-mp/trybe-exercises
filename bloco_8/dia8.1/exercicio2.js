const checaNumeros = (num1, num2) => {
    if (num1 === num2){
        return 'Parabéns, você ganhou!';
    } else {
        return 'Tente novamente!';
    }
};

const resultSorteio = (numApostado, callback) => {
    let numSort = Math.floor(Math.random() * 6);
    console.log(`O número sorteado foi ${numSort}.`);
    return checaNumeros(numApostado, numSort);
};

console.log(resultSorteio(5, checaNumeros));