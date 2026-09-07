/*
 * exercicio 07 — inferencia com any implicito (noImplicitAny)
 * demonstra casos onde o typescript nao consegue inferir e usa any.
 * 
 */

// ===== caso 1: variavel sem inicializacao =====
// let valorNaoInicializado;  // ERRO COM noImplicitAny: implicitamente any
let valorInicializado = "texto";  // ok: inferido como string

// ===== caso 2: parametro sem anotacao =====
// function processar(parametro) {  // ERRO COM noImplicitAny
//   return parametro;
// }

function processarCorreto(parametro: string): string {
  return parametro;
}

// ===== caso 3: array vazio =====
let arrayVazio: string[] = [];      // ok: explicitamente tipado
// let arrayImplicito = [];         // inferido como: any[] (sem noImplicitAny)

// ===== caso 4: usando unknown em vez de any =====
function verificarTipo(valor: unknown): string {
  if (typeof valor === "string") {
    return valor.toUpperCase();
  }
  return "nao e string";
}

const resultado1 = verificarTipo("ola");    // "OLA"
const resultado2 = verificarTipo(42);       // "nao e string"

// ===== caso 5: type guards =====
function eString(valor: unknown): valor is string {
  return typeof valor === "string";
}

function processarDesconhecido(valor: unknown) {
  if (eString(valor)) {
    // aqui valor e inferido como: string
    console.log(valor.length);
  } else if (typeof valor === "number") {
    // aqui valor e inferido como: number
    console.log(valor * 2);
  }
}

// ===== caso 6: genericos em vez de any =====
function primeiroElemento<T>(array: T[]): T | undefined {
  return array[0];
}

const primeiro = primeiroElemento([1, 2, 3]);  // primeiro: number | undefined

// ===== caso 7: sobrecargas =====
function converter(valor: string): number;
function converter(valor: number): string;
function converter(valor: string | number): string | number {
  if (typeof valor === "string") {
    return parseInt(valor);
  }
  return valor.toString();
}

const deString = converter("42");  // deString: number
const deNumero = converter(42);    // deNumero: string

export {}; // isola este arquivo como modulo

// ===== verificando valores =====
console.log(valorInicializado); // texto
console.log(processarCorreto("teste")); // teste
console.log(JSON.stringify(arrayVazio)); // []
console.log(resultado1); // OLA
console.log(resultado2); // nao e string
processarDesconhecido("texto");
processarDesconhecido(42);
console.log(primeiro); // 1
console.log(deString); // 42
console.log(deNumero); // "42"

