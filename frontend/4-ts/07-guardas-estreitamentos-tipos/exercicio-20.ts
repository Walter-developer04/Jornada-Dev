// O que é?
// Type predicate é uma função que informa ao TypeScript qual tipo foi identificado.

// Para que serve?
// Criar type guards personalizados quando typeof/instanceof não são suficientes.

// Sintaxe:
// function isType(valor: UnionType): valor is Tipo { ... }

// A forma "parameterName is Type" é um type predicate.

type Fish = { swim: () => void };
type Bird = { fly: () => void };

function isFish(pet: Fish | Bird): pet is Fish {
  return (pet as Fish).swim !== undefined;
}

let pet: Fish | Bird = { swim: () => console.log("Nadando") };

if (isFish(pet)) {
  // pet é Fish
  pet.swim();
} else {
  // pet é Bird
  pet.fly();
}
