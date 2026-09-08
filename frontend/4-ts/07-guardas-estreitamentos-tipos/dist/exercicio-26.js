"use strict";
// O que é?
// Condições específicas para TypeScript inferir type predicates.
// Para que serve?
// Saber quando você precisa escrever o predicate explicitamente.
// Condições:
// 1. Sem tipo de retorno explícito
// 2. Um único return
// 3. Não muta parâmetro
// 4. Retorna boolean com refinamento
// Exemplo de inferência:
const isNumber = (x) => typeof x === "number";
// TypeScript infere: (x: unknown) => x is number
// Exemplo de NÃO inferência:
function isPositive(n) {
    if (n > 0)
        return true;
    return false;
}
// Múltiplos returns, então não infere predicate
// Uso:
const valores = [1, "dois", 3, "quatro"];
const numeros = valores.filter(isNumber);
// numeros é number[]
console.log(numeros);
