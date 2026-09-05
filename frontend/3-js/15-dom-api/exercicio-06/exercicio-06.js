// API utilizada: Node.textContent
// O que faz: Obtem ou substitui todo o conteudo textual puro de um elemento e de seus descendentes.
// Por que e utilizada: Garante uma alteracao de texto rapida e segura, sem interpretar strings como tags HTML.

// 1. Acessa o elemento existente pelo ID
const paragrafo = document.getElementById("texto-alvo");

// 2. Define o novo conteudo textual com a propriedade textContent
paragrafo.textContent = "Texto substituto aplicado com sucesso atraves de textContent!";
paragrafo.style.color = "#065f46";
paragrafo.style.backgroundColor = "#ecfdf5";
paragrafo.style.borderColor = "#a7f3d0";
