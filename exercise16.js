/*
Para determinar se um ano é bissexto, é necessário saber se 
ele é multiplo de 4. Não pode ser múltiplo de 100, exceto se for também múltiplo de 400.
Com isso em mente, desenvolva uma função que recebe um número correspondente a um ano e 
retorna se ele é bissexto ou não.
*/

function checkLeapYear(year){
    return (
        year % 4 === 0 && 
        (year % 100 !== 0 || 
        (year % 100 === 0 && year % 400 === 0))
    )
}

console.log(checkLeapYear(2020)) // retornará true)
console.log(checkLeapYear(2100)) // retornará false, pois é múltiplo de 100 e não é múltiplo de 400