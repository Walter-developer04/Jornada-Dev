// API utilizada: document.querySelector()
// O que faz: Retorna o primeiro elemento do documento que corresponde ao seletor CSS especificado.
// Por que e utilizada: Oferece flexibilidade permitindo selecionar elementos utilizando classes (.mensagem), tags ou outros seletores CSS.

const elemento = document.querySelector(".mensagem");
elemento.textContent = "Primeiro elemento com a classe .mensagem encontrado e alterado!";
elemento.style.color = "#1e40af";
elemento.style.backgroundColor = "#eff6ff";
elemento.style.borderColor = "#bfdbfe";
