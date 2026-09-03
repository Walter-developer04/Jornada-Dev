// ============================================================
// EXERCÍCIO 09 — BigInt Operators (Operadores com BigInt)
// ============================================================
//
// BigInt é um tipo primitivo para inteiros de TAMANHO ARBITRÁRIO.
// Cria-se com o sufixo "n" no literal ou com a função BigInt().
//
// typeof 1n  →  "bigint"
//
// REGRAS OFICIAIS:
// - A maioria dos operadores numéricos funciona com BigInt,
//   mas NÃO se pode misturar BigInt e Number na mesma operação.
// - Divisão (/) TRUNCA a parte fracionária (sempre para zero).
// - O operador >>> NÃO existe para BigInt (TypeError).
// - + unário NÃO funciona com BigInt.
// - Comparações (>, <, == etc.) entre BigInt e Number são permitidas.

// ---------- Exemplo 1: criando BigInts ----------
const bigLiteral = 123456789012345678901234567890n; // sufixo n
const bigFuncao = BigInt("123456789012345678901234567890"); // função BigInt()
const bigDoNumero = BigInt(9007199254740991); // de um número inteiro

console.log(bigLiteral);   // 123456789012345678901234567890n
console.log(typeof bigLiteral); // "bigint"
console.log(bigFuncao === bigLiteral); // true

// ---------- Exemplo 2: o limite do Number ----------
// Acima de 2^53 - 1 (MAX_SAFE_INTEGER), Number perde precisão.
// BigInt continua exato:
const limiteNumber = Number.MAX_SAFE_INTEGER; // 9007199254740991

console.log(limiteNumber + 1);      // 9007199254740992
console.log(limiteNumber + 2);      // 9007199254740992 (ERRADO! perdeu precisão)

const limiteBigInt = 9007199254740991n;

console.log(limiteBigInt + 1n);     // 9007199254740992n (exato!)
console.log(limiteBigInt + 2n);     // 9007199254740993n (exato!)

// ---------- Exemplo 3: aritmética com BigInt ----------
const a = 10n;
const b = 3n;

console.log(a + b);  // 13n
console.log(a - b);  // 7n
console.log(a * b);  // 30n
console.log(a % b);  // 1n
console.log(a ** b); // 1000n
console.log(-a);     // -10n (negação unária funciona)

// Divisão TRUNCA para zero (BigInt não representa decimais):
console.log(a / b);       // 3n (não 3.333...)
console.log(5n / 2n);     // 2n (truncado, não 2.5n)
console.log(-5n / 2n);    // -2n (trunca em direção ao zero)

// ---------- Exemplo 4: NÃO misture BigInt e Number ----------
// 1n + 2  →  TypeError: Cannot mix BigInt and other types
// Para operar, converta explicitamente para um dos dois lados:
console.log(Number(1n) + 2);  // 3 (operação com Number)
console.log(1n + BigInt(2));  // 3n (operação com BigInt)

// ---------- Exemplo 5: operadores que NÃO funcionam ----------
// console.log(+1n);      // TypeError: unary plus com BigInt não existe
// console.log(8n >>> 2n); // TypeError: BigInt não tem >>> (sem unsigned shift)

// ---------- Exemplo 6: comparações funcionam com tipos mistos ----------
console.log(1n > 2);      // false
console.log(3 > 2n);      // true
console.log(2n >= 2);     // true
console.log(10n === 10);  // false (tipos diferentes)
console.log(10n == 10);   // true  (com == há conversão)
console.log(0n == 0);     // true

// ---------- Exemplo 7: operadores lógicos e BigInt ----------
// Seguem as mesmas regras de conversão: apenas 0n é falsy.
console.log(Boolean(0n));  // false
console.log(Boolean(12n)); // true
console.log(0n || 12n);    // 12n
console.log(0n && 12n);    // 0n
console.log(!0n);          // true

// ---------- Exemplo 8: bit a bit com BigInt ----------
// Funcionam, mas SEM truncar para 32 bits (diferente dos Numbers):
console.log(40000000000000000n >> 2n); // 10000000000000000n
console.log(15n & 9n);                 // 9n
console.log(~15n);                     // -16n
