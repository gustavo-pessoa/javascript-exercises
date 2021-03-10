/*
Crie uma função que receba um array de elementos e retorne um array somente com os números 
presentes no array recebido como parâmetro.
*/

function filterNumbers(arr) {
    const newArr = [...arr];
    return newArr.filter(element => typeof element === 'number');
}



console.log(
    filterNumbers(["Javascript", 1, "3", "Web", 20]) // retornará [1, 20]
)

console.log(
    filterNumbers(["a", "c"]) // retornará []
)

