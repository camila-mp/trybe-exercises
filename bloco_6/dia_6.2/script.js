
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

const options = {
  dateFormat: 'DD/MM/YYYY',
  color: 'link',
};

const calendars = bulmaCalendar.attach('#datepicker', options);

// Loop on each calendar initialized
calendars.forEach(calendar => {
	// Add listener to select event
	calendar.on('select', date => {
		console.log(date);
	});
});

// To access to bulmaCalendar instance of an element
const element = document.querySelector('#my-element');
if (element) {
	// bulmaCalendar instance is available as element.bulmaCalendar
	element.bulmaCalendar.on('select', datepicker => {
		console.log(datepicker.data.value());
	});
};