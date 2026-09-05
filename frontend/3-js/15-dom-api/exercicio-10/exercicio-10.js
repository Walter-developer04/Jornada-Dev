// API utilizada: EventTarget.addEventListener()
// O que faz: Registra uma funcao de retorno (callback) associada a um evento especifico (como o clique) disparado no elemento.
// Por que e utilizada: Permite conectar a interacao do usuario a manipulacao dinamica da DOM em tempo real.

// 1. Seleciona os elementos da pagina
const botao = document.getElementById("btn-interagir");
const painel = document.getElementById("painel-status");
const texto = document.getElementById("texto-status");

// 2. Registra o ouvinte para o evento de clique no botao
botao.addEventListener("click", function () {
    // 3. Atualiza o texto e a classe CSS do painel na DOM
    texto.textContent = "Interacao concluida! O clique no botao disparou o evento e modificou a DOM com sucesso.";
    painel.className = "status-ativo";
});
