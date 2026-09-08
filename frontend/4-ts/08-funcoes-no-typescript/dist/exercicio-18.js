"use strict";
// O que é?
// Funções que usam parâmetros de tipo (geralmente <T>) para preservar o tipo da entrada.
// Para que serve?
// Criar componentes reutilizáveis que funcionam com vários tipos de dados.
function identificar(valor) {
    return valor;
}
console.log(identificar("Texto"));
console.log(identificar(42));
