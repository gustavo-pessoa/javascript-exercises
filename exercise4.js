/*
Crie uma função que recebe um número (de 1 a 12) e retorne o mês correspondente como 
uma string. Por exemplo, se a entrada for 2, a função deverá retornar "fevereiro", 
pois este é o 2° mês
*/

let nameOfTheMonth = [
    "january", 
    "february", 
    "march", 
    "april", 
    "may", 
    "june", 
    "july", 
    "august", 
    "september", 
    "october", 
    "november", 
    "december"
]
function monthInFull(numberOfTheMonth) {
    return nameOfTheMonth[numberOfTheMonth - 1]
}

console.log(monthInFull(11))