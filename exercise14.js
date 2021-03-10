/*
Conversão de Objeto para Array
Desenvolva uma função que recebe como parâmetro um objeto e retorne um 
array de arrays, em que cada elemento é um array formado pelos pares chave/valor 
que corresponde a um atributo do objeto.
*/

function objectToArray(obj) {
    return Object.entries(obj);

}



console.log(
    objectToArray({
        nome: "Maria",
        profissao: "Desenvolvedora de software"
    }) // irá retornar [["nome", "Maria"], ["profissao", "Desenvolvedora de Software"]]
)



console.log(
    objectToArray({
        codigo: 11111,
        preco: 12000
    }) // irá retornar [["codigo", 11111], ["preco", 12000]]
)
