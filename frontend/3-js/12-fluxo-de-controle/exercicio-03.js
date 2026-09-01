// EXERCÍCIO 03 — Conditional Statements (Estruturas Condicionais)

// Estruturas condicionais controlam qual caminho o código percorre
// com base em condições avaliadas em tempo de execução.
// Este exercício consolida o uso de if...else e switch
// aplicados a situações mais elaboradas.

// --- Exemplo 1: Classificação de nota escolar ---

const notaFinal = 72;

// A nota determina a classificação do aluno.
if (notaFinal >= 90) {
    console.log("Conceito: A — Excelente.");
} else if (notaFinal >= 75) {
    console.log("Conceito: B — Bom.");
} else if (notaFinal >= 60) {
    console.log("Conceito: C — Regular.");
} else {
    console.log("Conceito: D — Reprovado.");
}

// --- Exemplo 2: Verificação de tipo antes de operar ---

const entradaDoUsuario = "42";

// Antes de usar o valor, verificamos e convertemos o tipo.
const valorConvertido = Number(entradaDoUsuario);

if (typeof valorConvertido === "number" && !isNaN(valorConvertido)) {
    console.log("Valor recebido como número:", valorConvertido);
} else {
    console.log("Entrada inválida. Número esperado.");
}

// --- Exemplo 3: Categoria de produto por preço ---

const precoDoProduto = 349;

// Classifica o produto pela faixa de preço.
if (precoDoProduto <= 100) {
    console.log("Categoria: Econômico.");
} else if (precoDoProduto <= 500) {
    console.log("Categoria: Intermediário.");
} else {
    console.log("Categoria: Premium.");
}

// --- Exemplo 4: Escolha de meio de transporte ---

const distanciaEmKm = 12;
const temVeiculoProprio = true;

// A decisão combina duas condições para sugerir o transporte.
if (distanciaEmKm <= 2) {
    console.log("Sugestão: a pé.");
} else if (distanciaEmKm <= 10 && !temVeiculoProprio) {
    console.log("Sugestão: transporte público.");
} else if (temVeiculoProprio) {
    console.log("Sugestão: veículo próprio.");
} else {
    console.log("Sugestão: aplicativo de transporte.");
}

// --- Exemplo 5: Mensagem de saudação por período do dia ---

const horaAtual = 14;

// Exibe uma saudação adequada ao período do dia.
switch (true) {
    case horaAtual >= 5 && horaAtual < 12:
        console.log("Bom dia!");
        break;
    case horaAtual >= 12 && horaAtual < 18:
        console.log("Boa tarde!");
        break;
    case horaAtual >= 18 && horaAtual < 24:
        console.log("Boa noite!");
        break;
    default:
        console.log("Hora inválida.");
}