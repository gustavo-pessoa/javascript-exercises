/*
Crie uma função que receba uma array e retorne o primeiro e o último elemento desse 
array como um novo array:
*/

console.log("Solução 1")
function receberPrimeiroEUltimoElemento(arr) {
    const newArr = []
    newArr.push(arr[0])
    newArr.push(arr[arr.length - 1])

    return newArr
}

console.log(receberPrimeiroEUltimoElemento([7,14,"olá"])) // retornará [7, "olá"]
console.log(receberPrimeiroEUltimoElemento([-100, "aplicativo", 16])) // retornará [-100, 16]

console.log("Solução 2")
function receberPrimeiroEUltimoElemento2(arr) {
    const newArr = []
    newArr.push(arr.shift())
    newArr.push(arr.pop())

    return newArr
}

console.log(receberPrimeiroEUltimoElemento2([7,14,"olá"])) // retornará [7, "olá"]
console.log(receberPrimeiroEUltimoElemento2([-100, "aplicativo", 16])) // retornará [-100, 16]