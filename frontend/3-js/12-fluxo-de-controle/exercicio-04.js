// EXERCÍCIO 04 — Exceptional Handling (Tratamento de Exceções)

// Exceções são erros que ocorrem durante a execução do código.
// O try...catch permite capturar esses erros sem interromper o programa.
// O finally é executado sempre, independente do que acontecer.

// --- Exemplo 1: Estrutura básica de try...catch ---

// O bloco try tenta executar o código.
// Se um erro ocorrer, o catch o captura.
try {
    const resultado = 10 / 0;
    console.log("Resultado:", resultado); // Infinity, mas sem erro real em JS

    // Forçamos um acesso a uma variável inexistente para gerar um erro.
    console.log(variavelInexistente);
} catch (erro) {
    // O objeto erro contém informações sobre o problema.
    console.log("Erro capturado:", erro.message);
}

// --- Exemplo 2: Usando finally ---

// O finally sempre é executado, com ou sem erro.
try {
    const idadeInformada = "vinte";
    const idadeNumerica = Number(idadeInformada);

    // isNaN verifica se o valor não é um número válido.
    if (isNaN(idadeNumerica)) {
        throw "Idade inválida. Informe apenas números.";
    }

    console.log("Idade válida:", idadeNumerica);
} catch (mensagemDeErro) {
    console.log("Erro:", mensagemDeErro);
} finally {
    console.log("Verificação de idade concluída.");
}

// --- Exemplo 3: throw com uma mensagem descritiva ---

const quantidadeEmEstoque = 0;
const quantidadeSolicitada = 3;

// Lança um erro se a quantidade solicitada ultrapassar o estoque.
try {
    if (quantidadeSolicitada > quantidadeEmEstoque) {
        throw "Quantidade solicitada indisponível em estoque.";
    }

    console.log("Pedido confirmado.");
} catch (mensagemDeErro) {
    console.log("Pedido recusado:", mensagemDeErro);
}

// --- Exemplo 4: Erro real capturado automaticamente ---

// Às vezes o próprio JavaScript lança o erro sem precisar de throw.
try {
    const textoJSON = "{ nome: Lucas }"; // JSON inválido
    const objetoConvertido = JSON.parse(textoJSON);
    console.log("Nome:", objetoConvertido.nome);
} catch (erro) {
    // O JavaScript já informou o problema no erro.message.
    console.log("Falha ao interpretar JSON:", erro.message);
} finally {
    console.log("Tentativa de leitura do JSON encerrada.");
}