// //variaveis uteis//
// let selectEstado = document.getElementById('select-estado');

// let estadosBR = ['AC', 'AL', 'AP', 'AM', 'BA', 'CE', 'DF', 'ES', 'GO', 'MA', 'MT', 'MS', 'MG', 'PA', 'PB', 'PR', 'PE', 'PI', 'RJ', 'RN', 'RS', 'RO', 'RR', 'SC', 'SP', 'SE', 'TO'];

// //cria tags option para selecionar estado//

// function criaMenuEstados() {
//   for(let index = 0; index < estadosBR.length; index += 1){
//     let opcaoSelect = document.createElement('option');
//     selectEstado.appendChild(opcaoSelect);
//     opcaoSelect.value = estadosBR[index];
//     opcaoSelect.innerText = estadosBR[index];
//   };
// };

// criaMenuEstados();

const form = document.getElementById('form');
const nameInput= document.getElementById('nome-compl');
const emailInput = document.getElementById('email');
const cpfInput = document.getElementById('cpf');
const divMae = document.getElementById('divMae')

let allValidInfo = {};
let allInvalidInfo = {};
let isValid = [];

function checkCharacName() {
  if (nameInput.value === '' || nameInput.value.length > 40){
    isValid.push(false);
    allInvalidInfo['Nome'] = 'Insira um nome válido.';
    nameInput.className = 'invalid';
    console.log(allInvalidInfo);
  }else{
    isValid.push(true);
    allValidInfo['Nome'] = nameInput.value;
    nameInput.className = 'valid';
    console.log(allValidInfo);
  };
};

function checkEmail() {
  const emailRegex = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/;
  let regexTestEmail = emailRegex.test(emailInput.value);
  if (emailInput.value === '' || regexTestEmail === false || emailInput.value.length > 50){
    isValid.push(false);
    allInvalidInfo['Email'] = 'Insira um email válido.';
    emailInput.className = 'invalid';
    console.log(allInvalidInfo);
  }else{
    isValid.push(true);
    allValidInfo['Email'] = emailInput.value;
    emailInput.className = 'valid';
    console.log(allValidInfo);
  };
};

function checkCharacCpf() {
  if (cpfInput.value === '' || cpfInput.value.length !== 11){
    isValid.push(false);
    allInvalidInfo['CPF']= 'Insira um CPF válido.';
    cpfInput.className = 'invalid';
    console.log(allInvalidInfo);
  }else{
    isValid.push(true);
    allValidInfo['CPF'] = cpfInput.value;
    cpfInput.className = 'valid';
    console.log(allValidInfo);
  };
};

function validInfoDiv() {
  if (!isValid.includes(false)){
    resetDiv();
    const validDiv = document.createElement('div');
    divMae.appendChild(validDiv);
    validDiv.id='valid-div';
    validDiv.innerText = 'Dados inseridos:\n\n';
    for (chave in allValidInfo){
      validDiv.innerText += chave + ': ' + allValidInfo[chave] + '\n\n';
    };
  };
};

function invalidInfoDiv() {
  if (isValid.includes(false)){
    resetDiv();
    const invalidDiv = document.createElement('div');
    divMae.appendChild(invalidDiv);
    invalidDiv.id='invalid-div';
    for (item in allInvalidInfo){
      invalidDiv.innerText += allInvalidInfo[item] + '\n';
    };
  };
};

function resetDiv() {
  if (divMae.childNodes.length > 0){
    divMae.removeChild(divMae.firstChild);
  };
};

function validateAll() {
  checkCharacName();
  checkEmail();
  checkCharacCpf();
};

form.addEventListener('submit', function(e) {
  e.preventDefault();
  validateAll();
  validInfoDiv();
  invalidInfoDiv();
});
