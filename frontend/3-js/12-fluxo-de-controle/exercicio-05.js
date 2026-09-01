// EXERCÍCIO 05 — Error Objects (Objetos de Erro)

// Em JavaScript, erros são objetos.
// O mais comum é o Error, criado com new Error("mensagem").
// Ele possui duas propriedades principais:
//   .name    → o tipo do erro (ex: "Error")
//   .message → a descrição do problema

// --- Exemplo 1: Lançando uma string vs lançando um Error Object ---

// Lançar uma string simples funciona, mas perde informações úteis.
try {
    throw "algo deu errado";
} catch (erro) {
    console.log("Tipo:", typeof erro);   // string — sem .name, sem .message
    console.log("Valor:", erro);
}

// Lançar um Error Object é mais informativo.
try {
    throw new Error("algo deu errado");
} catch (erro) {
    console.log("Tipo:", typeof erro);   // object
    console.log("Nome:", erro.name);     // "Error"
    console.log("Mensagem:", erro.message);
}

// --- Exemplo 2: Acessando as propriedades do objeto de erro ---

try {
    const idadeMinima = 18;
    const idadeInformada = 15;

    if (idadeInformada < idadeMinima) {
        throw new Error("Idade insuficiente para o cadastro.");
    }

    console.log("Cadastro realizado.");
} catch (erro) {
    // erro.name informa a categoria do erro.
    // erro.message informa o que causou o problema.
    console.log("Erro —", erro.name + ":", erro.message);
}

// --- Exemplo 3: Erro gerado pelo próprio JavaScript ---

// Quando o JS identifica um problema, ele também lança um Error Object.
try {
    const textoJSON = "{ nome: Lucas }"; // JSON malformado
    JSON.parse(textoJSON);
} catch (erro) {
    // O JavaScript criou e lançou o Error Object automaticamente.
    console.log("Nome do erro:", erro.name);       // "SyntaxError"
    console.log("Detalhe:", erro.message);
}

// --- Exemplo 4: finally com Error Object ---

const divisor = 0;

try {
    if (divisor === 0) {
        throw new Error("Divisão por zero não é permitida.");
    }

    console.log("Resultado:", 100 / divisor);
} catch (erro) {
    console.log("Operação inválida —", erro.message);
} finally {
    // O finally executa independente de erro ou sucesso.
    console.log("Cálculo encerrado.");
}