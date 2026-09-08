// O que é?
// Na compatibilidade de classes, apenas os membros da instância são comparados.
// Membros estáticos e construtores não afetam a compatibilidade estrutural.

class ClassA {
  static id = 1;
  name: string = "A";
}

class ClassB {
  static id = 2;
  name: string = "B";
}

let a: ClassA;
let b: ClassB;

// OK: 'ClassA' e 'ClassB' têm a mesma estrutura de instância ('name: string').
// O fato de terem estáticos diferentes não importa.
a = b;
