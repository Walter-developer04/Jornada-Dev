"use strict";
// O que é?
// instanceof verifica a cadeia de protótipos do objeto.
// Para que serve?
// Entender que instanceof não verifica o tipo, mas a herança.
// Comportamento:
// x instanceof Y é true se Y.prototype estiver na cadeia de protótipos de x.
class Animal {
    respirar() {
        console.log("Respirando");
    }
}
class Cachorro extends Animal {
    latir() {
        console.log("Au au");
    }
}
function processarAnimal(animal) {
    if (animal instanceof Animal) {
        // animal é Animal (ou subclasses como Cachorro)
        animal.respirar();
        // instanceof não diferencia Animal de Cachorro
        if (animal instanceof Cachorro) {
            animal.latir();
        }
    }
    else {
        // animal é string
        console.log(animal);
    }
}
processarAnimal(new Cachorro());
processarAnimal(new Animal());
processarAnimal("texto");
