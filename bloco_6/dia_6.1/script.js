//variaveis uteis//
let dropdownEstado = document.getElementById('select-estado');

let estadosBR = ['AC', 'AL', 'AP', 'AM', 'BA', 'CE', 'DF', 'ES', 'GO', 'MA', 'MT', 'MS', 'MG', 'PA', 'PB', 'PR', 'PE', 'PI', 'RJ', 'RN', 'RS', 'RO', 'RR', 'SC', 'SP', 'SE', 'TO'];

//cria menu dropdown dos estados//

for (let index = 0; index < estadosBR.length; index += 1){
  let optionElement = document.createElement('option');
  dropdownEstado.appendChild(optionElement);
  optionElement.value = estadosBR[index];
  optionElement.innerText = estadosBR[index];
  console.log('oi');
};



