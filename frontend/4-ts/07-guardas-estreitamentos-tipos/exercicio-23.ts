// O que é?
// Type predicates também fazem narrowing no branch else.

// Para que serve?
// O TypeScript sabe que se não é o tipo do predicate, é o outro tipo da union.

// Comportamento:
// if (isTypeA(valor)) { /* valor é TypeA */ } else { /* valor é TypeB */ }

interface Retangulo {
  tipo: "retangulo";
  largura: number;
  altura: number;
}

interface Triangulo {
  tipo: "triangulo";
  base: number;
  altura: number;
}

type Forma = Retangulo | Triangulo;

function isRetangulo(forma: Forma): forma is Retangulo {
  return forma.tipo === "retangulo";
}

function calcularArea(forma: Forma): number {
  if (isRetangulo(forma)) {
    // forma é Retangulo
    return forma.largura * forma.altura;
  } else {
    // forma é Triangulo (TypeScript sabe!)
    return (forma.base * forma.altura) / 2;
  }
}

console.log(calcularArea({ tipo: "retangulo", largura: 5, altura: 3 }));
console.log(calcularArea({ tipo: "triangulo", base: 4, altura: 6 }));
