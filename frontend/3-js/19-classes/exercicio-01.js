// 1. O que e:
// Uma classe e um modelo ou molde para criar objetos com propriedades e comportamentos padronizados.
//
// 2. Para que serve:
// Serve para organizar o codigo e facilitar a criacao de multiplos objetos que compartilham a mesma estrutura.
//
// 3. Como usar:
// Declaramos com a palavra-chave "class" e instanciamos novos objetos utilizando o operador "new".
//
// 4. Quando usar:
// Quando a aplicacao front-end precisar de varios itens com o mesmo formato, como cards de produtos ou itens de lista.
//
// 5. Quando NAO usar:
// Quando voce precisar apenas de um objeto simples e unico, onde um objeto literal resolve de forma mais direta.
//
// 6. Sintaxe:
// class NomeDaClasse {
//   propriedade = valor;
// }
// const instancia = new NomeDaClasse();

class CardProduto {
  titulo = "Produto Padrao";
  preco = 0;
}

const primeiroCard = new CardProduto();
const segundoCard = new CardProduto();

console.log(primeiroCard.titulo);
console.log(segundoCard.preco);
