
=======
let chessPiece = 'CAVALO';

switch (chessPiece.toLowerCase()){
    case 'rei':
        console.log('Desloca-se para todas as direções, mas apenas 1 casa de cada vez.');
        break;
    case 'rainha':
        console.log('Desloca-se na horizontal, diagonal e vertical, sem limite de casas.');
        break;
    case 'peão':
        console.log('Desloca-se apenas para frente, 2 casas na primeira jogada e 1 casa nas demais jogadas; ataca na diagonal');
        break;
    case 'torre':
        console.log('Desloca-se na vertical ou horizontal sem limite de casas, ataca apenas na diagonal ou vertical.');
        break;
    case 'bispo':
        console.log('Desloca-se apenas na diagonal sem limite de casas, ataca na diagonal.');
        break;
    case 'cavalo':
        console.log('Desloca-se para qualquer direção, sempre duas casas e em seguida salta para a direita ou esquerda.');
        break;
    default:
        console.log('Erro, peça inválida.')
}