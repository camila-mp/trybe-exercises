//variaveis uteis//
let selectEstado = document.getElementById('select-estado');

let estadosBR = ['AC', 'AL', 'AP', 'AM', 'BA', 'CE', 'DF', 'ES', 'GO', 'MA', 'MT', 'MS', 'MG', 'PA', 'PB', 'PR', 'PE', 'PI', 'RJ', 'RN', 'RS', 'RO', 'RR', 'SC', 'SP', 'SE', 'TO'];

//cria menu dropdown dos estados//

for (let index = 0; index < selectEstado.length; index += 1){
  let opcaoSelect = document.createElement('option');
  selectEstado.appendChild(opcaoSelect);
  opcaoSelect.value = estadosBR[index];
  opcaoSelect.innerText = estadosBR[index];
};



