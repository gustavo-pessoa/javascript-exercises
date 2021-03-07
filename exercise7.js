/*
Crie uma função que receba quatro números como parâmetro (numero, minimo, maximo, inclusivo) e 
retorne se o parâmetro numero (o primeiro) está entre minimo e maximo. 
Quando o parâmetro inclusivo for true, tenha "entre" como inlusivo, ou seja, considerando se 
numero é igual a minimo ou a maximo. Caso o parâmetro inclusivo não seja informado, seu valor 
padrão deverá ser false, portanto, a lógica será exclusiva, não considerando se numero é igual 
a minimo ou a maximo.
*/

function itIsBetween(number, min, max, inclusive = false) {
    return inclusive ? number >= min && number <= max : number > min && number < max
}

console.log(itIsBetween(1, 100, 250)) // retornará false
console.log(itIsBetween(16, 10, 20)) // retornará true
console.log(itIsBetween(150, 3, 150)) // retornará false
console.log(itIsBetween(3, 3, 150, true)) // retornará true