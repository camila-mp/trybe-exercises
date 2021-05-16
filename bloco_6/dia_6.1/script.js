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

var isFormValid = false;

const form = document.getElementById('form');

const nameInput= document.getElementById('nome-compl');
const emailInput = document.getElementById('email');
const cpfInput = document.getElementById('cpf');
const userEmail = emailInput.value;

const inputFields = [nameInput, emailInput, cpfInput];

const descInputs = ["nome completo", "email", "CPF",
];

function inputExists() {
  for (index = 0; index < inputFields.length; index +=1){
    if (inputFields[index].value) {
      inputFields[index].classList.add('valid');
    }else{
      inputFields[index].classList.add('invalid');
    };
  };
};

function checkCharacName() {
  nameInput.className = '';
  if (nameInput.value.length > 40){
    nameInput.className = 'invalid';
  }else{
    nameInput.className = 'valid';
  };
};

function checkEmail() {
  emailInput.className = '';
  var validateEmail = /\S+@\S+\.\S+/.test(userEmail);
  if (emailInput.value.length > 50 || validateEmail === false){
    emailInput.className = 'invalid';
  }else{
    emailInput.className = 'valid';
    console.log('oi')
  };
};

function checkCharacCpf(){
  cpfInput.className = '';
  if (cpfInput.value === 11){
    cpfInput.className = 'valid';
  }else{
    cpfInput.className = 'invalid';
  };
};

function createInvalidList() {
  var newArray = [];
  for (index2= 0; index2 < descInputs.length; index2 += 1){
    if (inputFields[index2].className === 'invalid'){
      newArray.push(descInputs[index2]);
    };
  };
  if (newArray !== []) {
    var errorDiv = document.createElement('div');
    body.appendChild(errorDiv);
    errorDiv.className = 'errorDiv';
    for (index of newArray){
      errorDiv.innerText = 'O ' + newArray[index] + ' inserido é inválido.\n'
    }; 
  };
};

form.addEventListener('submit', function(e) {
  e.preventDefault();
  inputExists();
  for (index1= 0; index1 < inputFields.length; index1 += 1){
    if (inputFields[index1].className === 'invalid'){
      alert("Por favor preencha todos os campos obrigatórios!")
    };
  };
  checkCharacName();
  checkEmail();
  checkCharacCpf();
  createInvalidList();
  console.log('hello')
});





