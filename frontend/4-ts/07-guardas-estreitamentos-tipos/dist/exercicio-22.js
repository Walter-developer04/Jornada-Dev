"use strict";
// O que é?
// Type predicates fazem narrowing no branch if.
function isProduto(item) {
    return "preco" in item;
}
function processarItem(item) {
    if (isProduto(item)) {
        // item é Produto
        console.log(`Produto: ${item.nome}, Preço: R$ ${item.preco}`);
    }
    else {
        // item é Servico
        console.log(`Serviço: ${item.nome}, Horas: ${item.horas}`);
    }
}
processarItem({ nome: "Livro", preco: 50 });
processarItem({ nome: "Consultoria", horas: 10 });
