/* ===================== DELETANDO PROPRIEDADES ===================== */

// 1. Criando um objeto com varias propriedades

const videogame = {
    nome: "PlayStation 5",
    marca: "Sony",
    preco: 4500,
    estaNaGarantia: true
}

// DELETANDO UMA PROPRIEDADE DO OBJETO 
// Par deletar uma propriedade é necessario usar o operador 'delete' seguido do objeto e da propriedade que queremos remover.
delete videogame.preco // Neste caso a propriedade preco foi totalmente removida de videogame

console.log(videogame)