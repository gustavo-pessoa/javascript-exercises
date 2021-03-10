/*
Elabore uma função que receba um array de números e retorne 
um array que tenha todos os números que são pares e que também tenham índices pares.

Lembre-se que um número é par porque é divisível por 2, ou seja, 
o resto da divisão da divisão dele por 2 é zero.
*/

function PairElementFromPairIndex(arr) {
    const newArr = arr.filter((element, index) => index % 2 === 0 && element % 2 === 0);
    
    return newArr;
}


console.log(
    PairElementFromPairIndex([1, 2, 3, 4]) // retornará []
)

console.log(
    PairElementFromPairIndex([10, 70, 22, 43]) // retornará [10, 22]
)