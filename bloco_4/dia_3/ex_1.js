let n = 5;
let star = '*';
let linha = ' ';

for (numStars = 1; numStars <= n; numStars += 1){
    linha += star;
};

for (numLinhas = 1; numLinhas <= n; numLinhas += 1){
    console.log(linha);
};