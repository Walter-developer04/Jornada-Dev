"use strict";
// Ambient Module: descreve a interface de um modulo sem implementa-lo
// Fato tecnico: declare module NAO cria a biblioteca nem instala nada
// Explicacao didatica: e como uma ficha que diz ao TypeScript o que existe
const somarLocal = (a, b) => a + b;
// Esta funcao local e real e funciona de verdade
console.log(somarLocal(2, 3)); // 5
// Em um projeto real, a implementacao viria de um pacote instalado.
// Aqui a compilacao funciona porque usamos apenas os tipos declarados.
