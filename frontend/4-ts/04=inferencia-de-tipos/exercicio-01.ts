/**
 * exercicio 01 — inferencia basica
 * demonstra como o typescript infere tipos quando nao ha anotacao explicita.
 */

// ===== variaveis simples =====
let contador = 0; // inferido como: number
contador += 1; // ok

let saudacao = "ola"; // inferido como: string
saudacao = "mundo"; // ok

let ativo = true; // inferido como: boolean
ativo = false; // ok

// ===== arrays =====
let numeros = [1, 2, 3]; // inferido como: number[]
numeros.push(4); // ok

// ===== funcoes =====
function somar(a: number, b: number) {
  // retorno inferido como: number
  return a + b;
}

let resultadoSoma = somar(10, 20); // resultadoSoma: number

console.log(resultadoSoma);
// ===== arrow functions =====
const multiplicar = (a: number, b: number) => a * b;
// multiplicar: (a: number, b: number) => number

console.log(multiplicar(2, 6));
// ===== objetos =====
const pessoa = {
  nome: "alice",
  idade: 30,
}; // inferido como: { nome: string, idade: number }

pessoa.nome = "bob"; // ok
// pessoa.profissao = "dev"; // ERRO INTENCIONAL: propriedade nao existe

// ===== verificacao de tipos =====
// descomente para ver os tipos inferidos:
// console.log(typeof contador);    // "number"
// console.log(typeof saudacao);    // "string"

export {}; // isola este arquivo como modulo


// ===== verificando valores =====
console.log(typeof saudacao); // string
console.log(typeof ativo); // boolean

