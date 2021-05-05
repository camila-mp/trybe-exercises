function createDaysOfTheWeek() {
    const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    const weekDaysList = document.querySelector('.week-days');
  
    for (let index = 0; index < weekDays.length; index += 1) {
      const days = weekDays[index];
      const dayListItem = document.createElement('li');
      dayListItem.innerHTML = days;
  
      weekDaysList.appendChild(dayListItem);
    };
  };
  
  createDaysOfTheWeek();
  
  // exercicio 1

  const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];

  function createDaysOfTheMonth () {
      const ulDays = document.getElementById('days'); // var ulDays captura a ul
      for (index = 0; index < dezDaysList.length; index += 1){
        const day = document.createElement('li'); // var day cria e captura as li
        const dayNumber = dezDaysList[index];     // var dayNumber captura numero

        if (dayNumber === 24 || dayNumber === 31){
          day.className = 'day holiday';
          day.innerHTML = dayNumber;
          ulDays.appendChild(day);
        }else if (dayNumber === 25){
          day.className = 'day friday holiday';
          day.innerHTML = dayNumber;
          ulDays.appendChild(day);
        }else if (dayNumber === 4 || dayNumber === 11 || dayNumber === 18){
          day.className = 'day friday';
          day.innerHTML = dayNumber;
          ulDays.appendChild(day);
        }else {
          day.className = 'day';
          day.innerHTML = dayNumber;
          ulDays.appendChild(day);
        };
      }; 
  };

  createDaysOfTheMonth();

  //exercicio 2
  function holidayBtn (string) {
    let holidayButton = document.createElement('button');
    holidayButton.id = 'btn-holiday';
    document.getElementsByClassName('buttons-container')[0].appendChild(holidayButton);
    holidayButton.innerHTML = 'Feriados';
  };

  holidayBtn('Feriados');

  //exercicio 3
  function eventHolidayBtn () {
    let clickFeriado = document.getElementById('btn-holiday');
    let holidayDays = document.querySelectorAll('.holiday');
    clickFeriado.addEventListener('click', function() {
      for (let index = 0; index < holidayDays.length; index += 1){
        if (holidayDays[index].style.backgroundColor === ''){
          holidayDays[index].style.backgroundColor = 'yellow';
        }else{
          holidayDays[index].style.backgroundColor = '';
        };
      };
    });
  };

  eventHolidayBtn();

  //exercicio 4

  function fridayBtn (string) {
    let fridayButton = document.createElement('button');
    fridayButton.id = 'btn-friday';
    document.getElementsByClassName('buttons-container')[0].appendChild(fridayButton);
    fridayButton.innerHTML = 'Sexta-feira';
  };

  fridayBtn('Sexta-feira');

  //exercicio 5
  function eventFridayBtn (){
    const clickFriday = document.getElementById('btn-friday'); //captura elemento botao
    const fridayDays = document.querySelectorAll('.friday'); 
    clickFriday.addEventListener('click', function() {
      for (index = 0; index < fridayDays.length; index += 1){
        if (fridayDays[index].style.backgroundColor === ''){
          fridayDays[index].style.backgroundColor = 'yellow';
        }else{
          fridayDays[index].style.backgroundColor = '';
        };
      };
    });
  };

// //exercicio 6
// function daysZoomMouseOver (){
//   const daysList = document.querySelectorAll('.day'); //capturar lista de dias
//   for(index = 0; index < daysList.length; index += 1){
//     daysList[index].addEventListener(mouseover, fucntion () {

//     })
//   };
// };