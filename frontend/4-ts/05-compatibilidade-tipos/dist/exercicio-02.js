"use strict";
// O que é?
// O compilador verifica se o objeto alvo (destino) possui todas as propriedades do objeto de origem.
// Propriedades extras no objeto de origem não geram erro, pois o destino as ignora.
let pet;
// O objeto inferido tem 'name' e 'owner'.
let dog = { name: "Lassie", owner: "Rudd Weatherwax" };
// Compatível, pois 'dog' tem pelo menos os membros exigidos por 'pet'.
pet = dog;
