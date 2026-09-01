// EXERCÍCIO 01 — if...else

// O if...else permite executar um bloco de código
// dependendo se uma condição é verdadeira ou falsa.

// --- Exemplo 1: Verificação de idade ---

const idadeUsuario = 20;

// Verifica se o usuário tem 18 anos ou mais.
if (idadeUsuario >= 18) {
    console.log("Acesso permitido.");
} else {
    console.log("Acesso negado.");
}

// --- Exemplo 2: Temperatura do dia ---

const temperaturaAtual = 15;

// Classifica a temperatura em quente, amena ou fria.
if (temperaturaAtual >= 30) {
    console.log("Dia quente.");
} else if (temperaturaAtual >= 18) {
    console.log("Dia ameno.");
} else {
    console.log("Dia frio.");
}

// --- Exemplo 3: Verificação de saldo ---

const saldoContaCorrente = 250;
const valorDaCompra = 300;

// Verifica se o saldo cobre o valor da compra.
if (saldoContaCorrente >= valorDaCompra) {
    console.log("Compra aprovada.");
} else {
    console.log("Saldo insuficiente.");
}

// --- Exemplo 4: Número par ou ímpar ---

const numeroEscolhido = 7;

// O operador % retorna o resto da divisão.
// Se o resto for 0, o número é par.
if (numeroEscolhido % 2 === 0) {
    console.log("Número par.");
} else {
    console.log("Número ímpar.");
}