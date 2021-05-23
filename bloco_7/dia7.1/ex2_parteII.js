// Crie uma função que receba uma frase e retorne qual a maior palavra.//

const achaMaiorPalav = (str) => {
    let arrayPalavras = str.split(' ');
    let novoArrayN = [];
    let novoArrayP = [];
    for (index = 0; index < arrayPalavras.length; index += 1){
        let palavra = arrayPalavras[index];
        novoArrayP.push(palavra);
        let numLetras = palavra.split('').length;
        novoArrayN.push(numLetras);
    }
    let maiorNum = novoArrayN[0];
    for (index2 = 1; index2 < novoArrayN.length; index2 += 1){
        if(maiorNum < novoArrayN[index2]){
            maiorNum = novoArrayN[index2];
        }
    }
    let indexMaiorP = novoArrayN.indexOf(maiorNum);
    let maiorPalavra = novoArrayP[indexMaiorP];
    return maiorPalavra;
};   

 console.log(achaMaiorPalav("Antônio foi no banheiro e não sabemos o que aconteceu"));