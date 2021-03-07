//Crie uma função que receba dois números e retorne se o primeiro é maior ou igual ao segundo.

function compareNumbers(firstNumber, secondNumber) {
    if(typeof firstNumber != typeof secondNumber) return false
    return firstNumber >= secondNumber
}

console.log(compareNumbers(0, 0)) // retornará true
console.log(compareNumbers(0, "0")) // retornará false
console.log(compareNumbers(5, 1)) // retornará true
