// ============================================
// CONVERSÃO IMPLÍCITA (Coerção)
// O JavaScript converte os tipos sozinho
// ============================================

// EXERCÍCIO 1: O + com string SEMPRE junta textos
let idade = "25";
console.log(idade + 5);            // "255" → virou texto!
console.log(typeof (idade + 5));   // "string"

// EXERCÍCIO 2: Os operadores - * / transformam em número
let numeroTexto = "10";
console.log(numeroTexto - 5);  // 5  → subtraiu de verdade
console.log(numeroTexto * 2);  // 20
console.log(numeroTexto / 2);  // 5

// EXERCÍCIO 3: true vale 1 e false vale 0 nas contas
let ligado = true;
let desligado = false;
console.log(ligado + 1);      // 2
console.log(desligado + 1);   // 1

// EXERCÍCIO 4: null vale 0, mas undefined não!
let vazio = null;
let naoDefinido = undefined;
console.log(vazio + 10);         // 10 → null vira 0
console.log(naoDefinido + 10);   // NaN → undefined não é número

// EXERCÍCIO 5: Desafio — adivinhe ANTES de rodar!
let desafio1 = "5" + 5;     // ?
let desafio2 = "5" - 5;     // ?
let desafio3 = "abc" * 2;   // ? (dica: NaN = "Not a Number")
console.log(desafio1, desafio2, desafio3);