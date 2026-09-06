/**
 * exercicio 03 — melhor tipo comum (best common type)
 * demonstra como o typescript encontra o tipo comum entre multiplas expressoes.
 */

// ===== arrays com tipos mistos =====
const valoresMistos = [1, "ola", true];
// inferido como: (string | number | boolean)[]

// ===== funcao com retorno de tipos diferentes =====
function criarValor(tipo: "texto" | "numero") {
  if (tipo === "texto") {
    return "exemplo";
  } else {
    return 42;
  }
}
console.log(criarValor);
// retorno inferido como: string | number

// ===== interfaces com heranca =====
interface Animal {
  nome: string;
}

interface Cachorro extends Animal {
  raca: string;
}

interface Gato extends Animal {
  cor: string;
}

// o melhor tipo comum entre Cachorro e Gato e Animal
const animais: Animal[] = [
  { nome: "rex", raca: "pastor" } as Cachorro,
  { nome: "mimi", cor: "preto" } as Gato,
];

// ===== funcao que aceita uniao =====
function processarEntrada(entrada: string | number) {
  if (typeof entrada === "string") {
    return entrada.toUpperCase();
  } else {
    return entrada * 2;
  }
}
// retorno inferido como: string | number

// ===== verificando tipos =====
const resultadoTexto = processarEntrada("hello"); // string
const resultadoNumero = processarEntrada(42);     // number

export {}; // isola este arquivo como modulo

// ===== verificando valores =====
console.log(JSON.stringify(valoresMistos));
console.log(JSON.stringify(animais));
console.log(resultadoTexto); // HELLO
console.log(resultadoNumero); // 84

