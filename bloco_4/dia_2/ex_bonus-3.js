let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let numbers2 = [];

for(index = 0; index < numbers.length; index += 1){
    if (index + 1 < numbers.length - 1){
        numbers2[index] = numbers[index]*numbers[index+1]
    }else if (index + 1 === numbers.length - 1) {
        numbers2[index] = numbers[index]*2}
}

console.log(numbers2)