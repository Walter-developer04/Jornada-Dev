// API utilizada: document.querySelectorAll()
// O que faz: Seleciona todos os elementos do documento correspondentes ao seletor CSS fornecido.
// O que representa o retorno: Retorna uma colecao estatica de nos chamada NodeList.
// Como percorrer: Utiliza-se o metodo forEach() para iterar sobre cada no da colecao individualmente.

const itens = document.querySelectorAll(".item");

itens.forEach(function (elemento, indice) {
    elemento.textContent = "Item " + (indice + 1) + " - Processado via querySelectorAll()";
    elemento.style.color = "#4338ca";
    elemento.style.backgroundColor = "#eef2ff";
    elemento.style.borderColor = "#c7d2fe";
});
