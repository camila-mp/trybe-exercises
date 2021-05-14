
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

const picker = new Pikaday({
  field: document.getElementById('datepicker'),
  format: 'DD/MM/YYYY',
  i18n: {
      previousMonth : 'Mês Anterior',
      nextMonth     : 'Próximo Mês',
      months        : ['Janeiro','Fevereiro','Março','Abril','Maio','Junho','Julho','Agosto','Setembro','Outubro','Novembro','Dezembro'],
      weekdays      : ['Domingo','Segunda','Terça','Quarta','Quinta','Sexta','Sábado'],
      weekdaysShort : ['Dom','Seg','Ter','Qua','Qui','Sex','Sáb']
  },
  });