let valorCusto = 300;

let valorVenda = 450;

if (valorCusto<0 || valorVenda<0){
    console.log('Erro, valor inválido inserido.');
}else{
    let impostoCusto = 0.2*valorCusto;

    let valorCustoTotal = valorCusto + impostoCusto;

    let lucro = (valorVenda - valorCustoTotal)*1000;

    console.log(lucro);
}

