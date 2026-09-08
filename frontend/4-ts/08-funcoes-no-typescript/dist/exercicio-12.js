"use strict";
// O que é?
// Coleta múltiplos argumentos em um único array usando ....
// Para que serve?
// Criar funções que aceitam um número variável de argumentos.
function somarTodos(...numeros) {
    return numeros.reduce((total, atual) => total + atual, 0);
}
console.log(somarTodos(1, 2, 3));
console.log(somarTodos(10, 20, 30, 40, 50));
