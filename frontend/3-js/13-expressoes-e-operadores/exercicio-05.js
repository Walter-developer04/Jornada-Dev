// ============================================================
// EXERCÍCIO 04 — Assignment Operators (Operadores de Atribuição)
// ============================================================
//
// SINTAXE:
//   x = y
//
// Atribui o valor de y a x e RETORNA o valor atribuído.
//
// Operadores compostos (forma curta):
//   x += y   →   x = x + y        x **= y  →   x = x ** y
//   x -= y   →   x = x - y        x <<= y  →   x = x << y
//   x *= y   →   x = x * y        x >>= y  →   x = x >> y
//   x /= y   →   x = x / y        x >>>= y →   x = x >>> y
//   x %= y   →   x = x % y        x &= y   →   x = x & y
//   x &&= y  →   x && (x = y)     x ^= y   →   x = x ^ y
//   x ||= y  →   x || (x = y)     x |= y   →   x = x | y
//   x ??= y  →   x ?? (x = y)
//
// Observação importante: a atribuição É uma expressão e tem um valor de retorno.

// ---------- Exemplo 1: atribuição simples ----------
let pontuacao;

pontuacao = 100;
console.log(pontuacao); // 100

// ---------- Exemplo 2: a atribuição retorna um valor ----------
// Podemos usar o valor da atribuição imediatamente:
let valor;

console.log((valor = 42)); // 42 (o console.log recebe o valor atribuído)
console.log(valor);        // 42

// ---------- Exemplo 3: encadeamento de atribuições ----------
// O operador = é associativo à direita: x = y = z vale x = (y = z).
// Todos recebem o mesmo valor:
let primeiro, segundo, terceiro;

primeiro = segundo = terceiro = 10;

console.log(primeiro, segundo, terceiro); // 10 10 10

// ---------- Exemplo 4: operadores compostos aritméticos ----------
let saldo = 50;

saldo += 20;  // saldo = saldo + 20
console.log(saldo); // 70

saldo -= 15;  // saldo = saldo - 15
console.log(saldo); // 55

saldo *= 2;   // saldo = saldo * 2
console.log(saldo); // 110

saldo /= 4;   // saldo = saldo / 4
console.log(saldo); // 27.5

saldo %= 5;   // saldo = saldo % 5
console.log(saldo); // 2.5

saldo **= 3;  // saldo = saldo ** 3
console.log(saldo); // 15.625

// ---------- Exemplo 5: atribuições lógicas (&&=, ||=, ??=) ----------
// Atribuem SOMENTE quando a condição lógica é atendida:
let nome = "";

nome ||= "Sem nome";  // atribui porque "" é falsy
console.log(nome);    // "Sem nome"

nome &&= "Atualizado"; // atribui porque nome agora é truthy
console.log(nome);    // "Atualizado"

let configuracao = null;

configuracao ??= { tema: "claro" }; // atribui porque null é nullish
console.log(configuracao);          // { tema: "claro" }

// Detalhe: 0 e "" NÃO disparam o ??= (diferente do ||=):
let volume = 0;

volume ??= 50;  // 0 não é null/undefined, então NÃO atribui
console.log(volume); // 0

// ---------- Exemplo 6: atribuição a propriedades de objetos ----------
const carro = { modelo: "Civic", ano: 2020 };

carro.ano = 2024;        // notação de ponto
carro["cor"] = "azul";   // notação de colchetes

console.log(carro); // { modelo: "Civic", ano: 2024, cor: "azul" }
