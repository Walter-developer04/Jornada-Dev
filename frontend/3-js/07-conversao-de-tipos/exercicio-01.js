// ============================================
// CONVERSÃO vs COERÇÃO — qual a diferença?
// Coerção = o JS converte SOZINHO (automático)
// Conversão = VOCÊ converte de propósito (manual)
// ============================================

// EXERCÍCIO 1: Coerção (o JS faz sozinho)
let numero = 10;
let texto = "10";

let resultadoCoercao = numero + texto;
console.log(resultadoCoercao);        // "1010" → juntou os textos!
console.log(typeof resultadoCoercao);  // "string"

// EXERCÍCIO 2: Conversão (eu faço manualmente)
let texto2 = "20";

let resultadoConversao = Number(texto2) + 5;
console.log(resultadoConversao);        // 25 → somou de verdade!
console.log(typeof resultadoConversao);  // "number"

// EXERCÍCIO 3: Compare os dois lados
let preco = "100";

let comCoercao = preco + 50;
console.log(comCoercao);        // "10050" → deu errado!

let comConversao = Number(preco) + 50;
console.log(comConversao);      // 150 → deu certo!