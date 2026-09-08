"use strict";
// O que é?
// A tipagem estrutural do TypeScript verifica a compatibilidade baseada apenas nos membros do tipo.
// Não exige que a classe implemente explicitamente a interface (nominal typing).
class Dog {
    name = "Rex";
}
let pet;
// A atribuição é permitida porque Dog possui a estrutura exigida por Pet.
pet = new Dog();
