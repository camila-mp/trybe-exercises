function maiorNome (nomes) {

    let maiorPalavra = nomes[0]

    for (key in nomes){

        if(maiorPalavra.length < nomes[key].length){
            maiorPalavra = nomes[key]
        }
    }
    return console.log(maiorPalavra)
}

nomes = ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']

maiorNome(nomes);