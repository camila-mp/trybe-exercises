
//variaveis uteis//
let selectEstado = document.getElementById('select-estado');

let estadosBR = ['AC', 'AL', 'AP', 'AM', 'BA', 'CE', 'DF', 'ES', 'GO', 'MA', 'MT', 'MS', 'MG', 'PA', 'PB', 'PR', 'PE', 'PI', 'RJ', 'RN', 'RS', 'RO', 'RR', 'SC', 'SP', 'SE', 'TO'];

//cria tags option para selecionar estado//

function criaMenuEstados() {
  for(let index = 0; index < estadosBR.length; index += 1){
    let opcaoSelect = document.createElement('option');
    selectEstado.appendChild(opcaoSelect);
    opcaoSelect.value = estadosBR[index];
    opcaoSelect.innerText = estadosBR[index];
  };
};

criaMenuEstados();