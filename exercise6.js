/*
Escreva uma função que receba um valor booleano ou numérico. 
Se o parâmetro fornecido for booleano, o retorno da função deverá ser o inverso. 
Por exemplo, se a entrada for false, retornará true. 
Se o parâmetro for numérico, o retorno será o número inverso. 
Por exemplo,mse for fornecido 1, o retorno será -1. 
Se o parâmetro de entrada não for de nenhum dos tipo acima, 
retorne "booleano ou número esperados, mas o parâmetro é do tipo ...".
*/

function typeCheck(booleanOrNumber) {
    if (typeof(booleanOrNumber) === "boolean") {
            if (booleanOrNumber === true) {
              return false
            } else {   
                return true
            }
    
    } else if (typeof(booleanOrNumber) === "number") {
        return booleanOrNumber * -1
    } else {
        return `booleano ou número esperados, mas o parâmetro é do tipo ${typeof(booleanOrNumber)}`
    }
}

console.log(typeCheck("oi"))