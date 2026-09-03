// ============================================================
// EXERCÍCIO 06 — Arithmetic Operators (Operadores Aritméticos)
// ============================================================
//
// OPERADORES:
//   +    adição          -    subtração
//   *    multiplicação   /    divisão
//   %    resto (módulo)  **   exponenciação
//   ++   incremento      --   decremento
//   -x   negação unária  +x   conversão para número
//
// Operadores aritméticos aceitam valores numéricos e retornam um valor numérico.
// Detalhe oficial: divisão por zero produz Infinity.

// ---------- Exemplo 1: as quatro operações básicas ----------
const primeiroNumero = 10;
const segundoNumero = 5;

const soma = primeiroNumero + segundoNumero;
const diferenca = primeiroNumero - segundoNumero;
const produto = primeiroNumero * segundoNumero;
const quociente = primeiroNumero / segundoNumero;

console.log(soma);      // 15
console.log(diferenca); // 5
console.log(produto);   // 50
console.log(quociente); // 2

// ---------- Exemplo 2: divisão e números decimais ----------
console.log(1 / 2);       // 0.5
console.log(7 / 2);       // 3.5
console.log(1 / 0);       // Infinity (divisão por zero!)
console.log(-1 / 0);      // -Infinity

// ---------- Exemplo 3: resto (%) ----------
// Retorna o resto INTEIRO da divisão entre os dois operandos:
console.log(12 % 5);  // 2  (12 = 5 * 2 + 2)
console.log(10 % 2);  // 0  (par)
console.log(7 % 3);   // 1

// Uso clássico: descobrir se um número é par ou ímpar:
const numeroPar = 10;
const numeroImpar = 7;

console.log(numeroPar % 2 === 0);   // true  (é par)
console.log(numeroImpar % 2 === 0); // false (é ímpar)

// ---------- Exemplo 4: exponenciação (**) ----------
// Calcula base elevada à potência:
console.log(2 ** 3);    // 8   (2 * 2 * 2)
console.log(5 ** 2);    // 25
console.log(10 ** -1);  // 0.1
console.log(2 ** 0.5);  // 1.4142135623730951 (raiz quadrada de 2)

// ---------- Exemplo 5: incremento (++) e decremento (--) ----------
// Prefixo (++x): incrementa primeiro, retorna o novo valor.
// Posfixo (x++): retorna o valor atual, depois incrementa.
let contador = 10;

console.log(contador++); // 10 (valor antes do incremento)
console.log(contador);   // 11

console.log(++contador); // 12 (valor depois do incremento)
console.log(contador--); // 12 (valor antes do decremento)
console.log(--contador); // 10

// ---------- Exemplo 6: precedência ----------
// *, / e % vêm antes de + e -:
console.log(2 + 3 * 4);     // 14 (não 20!)
console.log((2 + 3) * 4);   // 20 (parênteses alteram a precedência)

// ** tem precedência maior que o unário - à esquerda:
// console.log(-2 ** 2);    // SyntaxError: o unário - não pode ficar antes de **
console.log((-2) ** 2);     // 4 (com parênteses funciona)

// ---------- Exemplo 7: o + também concatena strings! ----------
// Se UM dos operandos for string, o + concatena em vez de somar:
console.log(1 + 2);          // 3 (adição)
console.log("1" + "2");      // "12" (concatenação)
console.log(1 + "2");        // "12" (coerção: número vira string)
console.log("5" * "2");      // 10 (com * a conversão é numérica!)
