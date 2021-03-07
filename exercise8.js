/*
Desenvolva uma função que recebe dois números inteiros não negativos (maiores ou iguais a zero) 
e realize a multiplicação deles. Porém, não utilize o operador de mutiplicação.
*/

function multiply(number1, number2) {
    let counter = 0
    let result = 0
    for (let i = 0; i < number2; i++) {
        result += number1
    }
    
    return result
}

console.log(multiply(12, 5))