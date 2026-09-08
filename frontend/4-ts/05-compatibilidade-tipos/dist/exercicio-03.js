"use strict";
// O que é?
// Quando um literal de objeto é atribuído diretamente a uma variável tipada,
// o TypeScript aplica uma verificação rigorosa de propriedades excessivas (Excess Property Checks).
// Erro esperado:
// Object literal may only specify known properties, and 'owner' does not exist in type 'Pet'.
let dog = { name: "Lassie", owner: "Rudd Weatherwax" };
