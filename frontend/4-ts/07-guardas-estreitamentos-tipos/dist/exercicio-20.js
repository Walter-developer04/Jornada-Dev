"use strict";
// O que é?
// Type predicate é uma função que informa ao TypeScript qual tipo foi identificado.
function isFish(pet) {
    return pet.swim !== undefined;
}
let pet = { swim: () => console.log("Nadando") };
if (isFish(pet)) {
    // pet é Fish
    pet.swim();
}
else {
    // pet é Bird
    pet.fly();
}
