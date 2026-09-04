// ============================================
// CONVERSÃO EXPLÍCITA
// VOCÊ converte usando Number(), String() e Boolean()
// ============================================

// EXERCÍCIO 1: Transformando em NÚMERO
let textoNumero = "42";
console.log(typeof textoNumero);  // "string"

let numeroDeVerdade = Number(textoNumero);
console.log(typeof numeroDeVerdade);  // "number"

// Cuidado: texto que não é número vira NaN
console.log(Number("olá"));  // NaN

// EXERCÍCIO 2: Transformando em STRING
let numero = 99;
let texto = String(numero);
console.log(texto);         // "99"
console.log(typeof texto);  // "string"

// EXERCÍCIO 3: Transformando em BOOLEAN
// Viram false: 0, "" (string vazia), null, undefined
console.log(Boolean(0));      // false
console.log(Boolean(""));     // false
console.log(Boolean(null));   // false

// Todo o resto vira true
console.log(Boolean(1));      // true
console.log(Boolean("oi"));   // true

// EXERCÍCIO 4: Desafio — corrija o código
let totalErrado = "50" + 50;
console.log(totalErrado);  // "5050" → errado!

// Agora corrija usando Number():
let totalCerto = Number("50") + 50;
console.log(totalCerto);  // 100 → certo!ff