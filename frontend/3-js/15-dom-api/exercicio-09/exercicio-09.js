// API utilizada: ChildNode.remove()
// O que faz: Remove o elemento diretamente da arvore da DOM a qual ele pertence.
// Por que e utilizada: Permite excluir elementos obsoletos de forma simples, sem precisar referenciar o no pai.

// 1. Localiza o elemento alvo pelo ID
const elemento = document.getElementById("bloco-remover");

// 2. Executa a remocao direta do elemento da arvore DOM
elemento.remove();
