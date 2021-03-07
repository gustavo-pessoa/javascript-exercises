/*Elabore uma função que recebe um número como parâmetro e retorne uma string 
com o símbolo "+" na quantidade especificada no parâmetro.
*/

// solução 1
function plusSymbol(number) {
    let result = ""
    for (let i = 0; i < number; i++) {
        result += "+"
    }
    return result
}
console.log("Solução 1")
console.log(plusSymbol(2)) // retornará "++"
console.log(plusSymbol(4)) // retornará "++++"

// solução 2
function plusSymbol2(quantidade) {
    return Array(quantidade).fill('+').join('')
}
console.log("Solução 2")
console.log(plusSymbol2(2)) // retornará "++"
console.log(plusSymbol2(4)) // retornará "++++"    

// solução 3
function plusSymbol3(quantidade) {
    return "+".repeat(quantidade)
}
console.log("Solução 3")
console.log(plusSymbol3(2)) // retornará "++"
console.log(plusSymbol3(4)) // retornará "++++"  