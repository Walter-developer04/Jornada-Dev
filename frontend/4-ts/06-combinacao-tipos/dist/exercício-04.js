"use strict";
/**
 * ===================================================
 *  EXERCICIO 04 - NARROWING DE UNIAO COM TYPEOF
 * ===================================================
 *  O QUE E:      Refinamento do tipo de uma uniao com o operador nativo typeof do JavaScript.
 *  O QUE FAZ:    Informa ao TypeScript qual tipo especifico esta presente em cada ramo de controle.
 *  SINTAXE:      if (typeof variavel === "string") { ... }
 *  QUANDO USAR:  Ao receber tipos primitivos combinados por uniao (string, number, boolean, etc.).
 *  QUANDO NAO:   Para checar objetos complexos, arrays ou classes, pois typeof retorna apenas "object".
 * ===================================================
 */
function formatarDado(entrada) {
    if (typeof entrada === "string") {
        // Aqui entrada e estritamente string
        return entrada.trim().toUpperCase();
    }
    // Aqui o TypeScript infere que entrada so pode ser number
    return entrada.toFixed(2);
}
const resultadoFormatado = formatarDado("  produto em destaque  ");
// 2. EXEMPLO INCORRETO
function multiplicarEntrada(entrada) {
    // @ts-expect-error - O operador aritmetico nao pode ser aplicado a tipos com uniao contendo string
    return entrada * 2;
}
// 3. MINI-DESAFIO
// Complete a funcao para retornar o dobro se for number, ou o comprimento do texto se for string.
function processarMedida(medida) {
    if (typeof medida === "number") {
        return medida * 2;
    }
    return medida.length;
}
// Solucao comentada:
// if (typeof medida === "number") { return medida * 2; }
// return medida.length;
