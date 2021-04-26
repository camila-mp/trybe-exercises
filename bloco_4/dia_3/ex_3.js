let n = 5;
let star = '*';
let linha = ' ';

for (numBlanks = n-1; numBlanks > 0; numBlanks -= 1){
    linha = linha + linha;
    
};

let resultado = linha + star;

console.log(resultado);