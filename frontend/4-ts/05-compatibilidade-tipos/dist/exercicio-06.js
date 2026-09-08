"use strict";
// O que é?
// Por padrão (sem strictFunctionTypes), o TS permite bivariância em parâmetros:
// Um parâmetro mais específico pode ser aceito no lugar de um mais genérico.
// Isso é "unsound" (inseguro), mas útil no dia a dia.
let handlerAnimal = (a) => { console.log(a.name); };
let handlerDog = (d) => { console.log(d.breed); };
// Sem strictFunctionTypes, isso é permitido (Bivariância).
// Com strictFunctionTypes ativado no tsconfig, geraria erro, pois 'handlerDog' 
// tentaria acessar 'breed' em um Animal genérico.
handlerAnimal = handlerDog;
