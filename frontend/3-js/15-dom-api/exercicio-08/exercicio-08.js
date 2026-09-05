// API utilizada: ParentNode.append()
// O que faz: Insere um elemento ou no de texto ao final da lista de filhos do elemento pai.
// Por que e utilizada: Permite anexar novos elementos diretamente na arvore DOM para que passem a ser exibidos na tela.

// 1. Localiza o elemento pai que recebera o filho
const painel = document.getElementById("painel-insercao");

// 2. Cria o novo elemento a ser inserido
const novoCard = document.createElement("div");
novoCard.className = "card-inserido";
novoCard.textContent = "Novo elemento anexado com sucesso ao final do painel via append()!";

// 3. Insere o elemento criado no painel da DOM
painel.append(novoCard);
