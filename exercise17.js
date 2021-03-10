/*
Escreva uma função que receba um array de números e 
retorne a soma de todos os números desse array.
*/

function addNumbers(arr){
    let sum = 0;
    arr.forEach(element => sum += element);
    return sum;
}

console.log(addNumbers([10, 10, 10])) // retornará 30
console.log(addNumbers([15, 15, 15, 15])) // retornará 60