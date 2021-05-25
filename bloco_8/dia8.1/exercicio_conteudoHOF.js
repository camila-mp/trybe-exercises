const wakeUp = () => 'Acordando!!';
const haveCoffee = () => 'Bora tomar café!!';
const goToSleep = () => 'Partiu dormir!!';

const doingThings = (func) => func();

console.log(doingThings(wakeUp));