
// O que é?
// Sintaxe concisa para criar funções usando =>.

// Para que serve?
// Escrever funções curtas de forma mais limpa, preservando o escopo léxico do this.

const subtrair = (a: number, b: number): number => {
  return a - b;
};

// Quando há apenas uma expressão, o retorno é implícito
const dobrar = (valor: number): number => valor * 2;

console.log(subtrair(10, 3));
console.log(dobrar(7));

