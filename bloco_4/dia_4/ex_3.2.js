function menorInteiro (arrayNumeros){

    let indexMenorNum=0;

    for (let indice in arrayNumeros){
        if(arrayNumeros[indexMenorNum]>arrayNumeros[indice]){
            indexMaiorNum = indice;
        };
    };
    return console.log(indexMaiorNum)
};

menorInteiro([2, 3, 6, 7, 10, 1])