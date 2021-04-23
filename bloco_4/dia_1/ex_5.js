let angulo1 = 80;
let angulo2 = 80;
let angulo3 = 20;

if (angulo1+angulo2+angulo3 === 180) {
    console.log("true");
} else if (angulo1+angulo2+angulo3 !== 180 && angulo1>0 && angulo2>0 && angulo3>0){
    console.log("false");
} else {
    console.log("error");
};