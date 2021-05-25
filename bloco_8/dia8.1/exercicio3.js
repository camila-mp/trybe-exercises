// Crie uma HOF que receberá três parâmetros. O primeiro será um array de respostas corretas (Gabarito), o segundo será um array de respostas a serem verificadas (respostas da pessoa estudante) e o terceiro é uma função que checa se as respostas estão corretas e faz a contagem da pontuação final recebida pela pessoa estudante. Ao final a HOF deve retornar o total da contagem de respostas certas.

// Quando a resposta for correta a contagem sobe 1 ponto, quando for incorreta desce 0.5 pontos, e quando não houver resposta ("N.A") não altera-se a contagem.

const corrige = (gabarito, estudante) => {
  let pontos = 0;
  for (let questao = 0; questao < gabarito.length; questao += 1){
    if (gabarito[questao] === estudante[questao]){
      pontos += 1;
    } else if (gabarito[questao] !== estudante[questao]){
      pontos -= 0.5;
    } else if (estudante[questao] === 'N.A'){
      pontos;
    }
  }
  return pontos;
};

const studentAnswers = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];
const rightAnswers =    ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];

const geraResultado = (rightAnswers, studentAnswers, corrige) => {
    return corrige(rightAnswers, studentAnswers);
};

console.log(geraResultado(rightAnswers, studentAnswers, corrige));
