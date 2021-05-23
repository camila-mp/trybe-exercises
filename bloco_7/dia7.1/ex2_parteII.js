// Crie uma função que receba uma frase e retorne qual a maior palavra.//

const achaMaiorPalav = (str) => {
    let arrayPalavras = str.split(' ');
    let maiorComp = 0;
    let maiorPalavra = '';
    for (const word of arrayPalavras){
        if(word.length > maiorComp){
            maiorComp = word.length;
            maiorPalavra = word;
        }
    };
    return maiorPalavra;
};   

 console.log(achaMaiorPalav("Antônio foi no banheiro e não sabemos o que aconteceu"));