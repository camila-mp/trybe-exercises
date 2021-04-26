let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

for (index = 0; index < numbers.length; index += 1){
    menorQue = 0
    for (index2 = 0; index2 < numbers.length; index2 += 1){
        if (numbers[index] < numbers[index2]){
            menorQue += 1

            if (menorQue===9){
                console.log(numbers[index])
            }
            
        }
    }
}