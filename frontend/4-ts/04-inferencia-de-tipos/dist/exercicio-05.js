"use strict";
/**
 * exercicio 05 — inferencia em tipos genericos
 * demonstra como o typescript infere argumentos de tipo automaticamente.
 */
Object.defineProperty(exports, "__esModule", { value: true });
// ===== funcao generica simples =====
function identidade(valor) {
    return valor;
}
const num = identidade(42); // num: number (T inferido como number)
const texto = identidade("ola"); // texto: string (T inferido como string)
// ===== multiplos parametros genericos =====
function criarPar(primeiro, segundo) {
    return [primeiro, segundo];
}
const parMisto = criarPar(1, "dois"); // parMisto: [number, string]
// ===== classe generica =====
class Caixa {
    constructor(valor) {
        this.conteudo = valor;
    }
    obter() {
        return this.conteudo;
    }
}
const caixaNumero = new Caixa(42); // Caixa<number>
const caixaTexto = new Caixa("teste"); // Caixa<string>
function mostrarComprimento(item) {
    console.log(`comprimento: ${item.length}`);
    return item;
}
const stringResultado = mostrarComprimento("ola"); // string
const arrayResultado = mostrarComprimento([1, 2, 3]); // number[]
// ===== inferencia de callback =====
function transformar(itens, transformacao) {
    return itens.map(transformacao);
}
const listaNomes = ["alice", "bob", "charlie"];
const comprimentos = transformar(listaNomes, (nome) => nome.length);
// comprimentos: number[] (U inferido como number)
// ===== exemplo: funcao que infere baseado no argumento =====
function obterPrimeiro(array) {
    return array[0];
}
const primeiroNome = obterPrimeiro(["a", "b", "c"]); // string | undefined
const primeiroNumero = obterPrimeiro([1, 2, 3]); // number | undefined
// ===== verificando valores =====
console.log(num); // 42
console.log(texto); // ola
console.log(JSON.stringify(parMisto));
console.log(caixaNumero.obter()); // 42
console.log(caixaTexto.obter()); // teste
console.log(stringResultado);
console.log(JSON.stringify(arrayResultado));
console.log(JSON.stringify(comprimentos));
console.log(primeiroNome); // a
console.log(primeiroNumero); // 1
