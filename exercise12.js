/*
Você escreverá uma função que recebe um objeto como primeiro parâmetro e, como segundo parâmetro, o nome
de uma propriedade contida nesse objeto. Em seguida, retorne uma cópia desse objeto sem a propriedade
especificada no segundo parâmetro.

💡 A fim de testar se o objeto retornado não é o mesmo que foi passado como parâmetro para a função
removerPropriedade, você poderá usar a função Object.is(), por exemplo:
Object.is(removerPropriedade(objeto, "descricao"), objeto)
Retornará false se o objeto não for o mesmo.
*/

function removerPropriedade(obj, prop){
    const newObj = {...obj}
    delete newObj[prop];
    return newObj;
}


console.log(removerPropriedade({a: 1, b: 2}, "a")) // retornará {b: 2}

console.log(
    removerPropriedade({
        id: 20,
        nome: "caneta",
        descricao: "Não preenchido"
        }, "descricao") // retornará {id: 20, nome: "caneta"}
)
