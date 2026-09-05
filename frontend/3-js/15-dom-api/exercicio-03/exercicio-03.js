// API utilizada: document.getElementById()
// O que faz: Localiza e retorna o elemento cujo atributo id corresponde exatamente a string fornecida.
// Como encontra o elemento: Realiza uma busca direta no documento pelo identificador unico informado.
// Quando e util: E util quando precisamos selecionar com rapidez e precisao um elemento exclusivo na pagina.

const elementoDestaque = document.getElementById("destaque");
elementoDestaque.textContent = "Elemento localizado pelo id e modificado com sucesso!";
elementoDestaque.style.color = "#065f46";
elementoDestaque.style.backgroundColor = "#ecfdf5";
elementoDestaque.style.borderColor = "#a7f3d0";
