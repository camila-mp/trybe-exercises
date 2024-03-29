// Crie uma HOF que receberá três parâmetros. O primeiro será um array de respostas corretas (Gabarito), o segundo será um array de respostas a serem verificadas (respostas da pessoa estudante) e o terceiro é uma função que checa se as respostas estão corretas e faz a contagem da pontuação final recebida pela pessoa estudante. Ao final a HOF deve retornar o total da contagem de respostas certas.

// Quando a resposta for correta a contagem sobe 1 ponto, quando for incorreta desce 0.5 pontos, e quando não houver resposta ("N.A") não altera-se a contagem.

const corrige = (gabarito, estudante) => {
  if (gabarito === estudante){
    return 1;
  } else if (gabarito !== estudante){
    return -0.5;
  } else if (estudante === 'N.A'){
    return 0;
  }
};

const studentAnswers = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];
const rightAnswers =    ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];

const geraResultado = (rightAnswers, studentAnswers, corrige) => {
  let pontos = 0;
  for (index = 0; index < rightAnswers.length; index += 1){
    pontos += corrige(rightAnswers[index], studentAnswers[index]);
  }
    return `Resultado final: ${pontos} pontos.`;
};

console.log(geraResultado(rightAnswers, studentAnswers, corrige));
