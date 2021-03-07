/*
Escreva uma função que receba dois parâmetros. O primeiro parâmetro é o elemento que repetirá, 
enquanto que o segundo será o número de vezes que haverá repetição. Um array será retornado.
*/

function repeat(element, repetitions) {
/*    let result = []
    for(let i = 0; i < repetitions; i++) {
        result.push(element)
    }
return result
*/
return Array(repetitions).fill(element)
}


console.log(repeat("código", 2)) // retornará ["código", "código"]
console.log(repeat(7, 3)) // retornará [7, 7, 7]
