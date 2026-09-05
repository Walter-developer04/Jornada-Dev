// API utilizada: document
// O que e e o que representa: O objeto document representa a pagina HTML carregada na janela do navegador e a arvore de nos da DOM.
// Por que e importante para a DOM: Ele serve como ponto de partida obrigatorio para selecionar, criar e alterar elementos da pagina.

// Altera o titulo da aba do navegador por meio do objeto document
document.title = "Exercicio 02 - Document Acessado";

// Altera a cor de fundo do body atraves da propriedade document.body
document.body.style.backgroundColor = "#eef2f7";

// Localiza o elemento no documento e atualiza o seu conteudo textual
const paragrafo = document.getElementById("mensagem-documento");
paragrafo.textContent = "O JavaScript acessou o documento com sucesso via objeto document.";
