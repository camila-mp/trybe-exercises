function maiorInteiro (arrayNumeros){

    let indexMaiorNum=0;

    for (let indice in arrayNumeros){
        if(arrayNumeros[indexMaiorNum]<arrayNumeros[indice]){
            indexMaiorNum = indice;
        };
    };
    return console.log(indexMaiorNum)
};

maiorInteiro([2, 3, 6, 7, 10, 1])