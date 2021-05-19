const oddsAndEvens = [13, 3, 4, 10, 7, 2];

const oddsAndEvensFunc = (array) => {
    let sortedArray = oddsAndEvens.sort(function(a, b){return a-b});
    return `Os números ${sortedArray} se encontram ordenados de forma crescente!`
}

console.log(oddsAndEvensFunc(oddsAndEvens));