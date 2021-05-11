//variaveis uteis//
let dropdownEstado = document.getElementById('dropdown-estado');

let estadosBR = ['AC', 'AL', 'AP', 'AM', 'BA', 'CE', 'DF', 'ES', 'GO', 'MA', 'MT', 'MS', 'MG', 'PA', 'PB', 'PR', 'PE', 'PI', 'RJ', 'RN', 'RS', 'RO', 'RR', 'SC', 'SP', 'SE', 'TO'];

//funcao que cria menu dropdown dos estados//

function criaMenuEst() {
  for (index = 0; index < estadosBR.length; index += 1){
    let optionElement = document.createElement('option');
    dropdownEstado.appendChild(optionElement);
    optionElement.value = estadosBR[index];
    optionElement.innerText = estadosBR[index];
  };
};

criaMenuEst();


