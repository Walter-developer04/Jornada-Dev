// O que é?
// Type guards personalizados são funções que retornam type predicates.

// Para que serve?
// Quando você precisa de lógica personalizada para identificar tipos.

// Como criar:
// 1. Retorne um type predicate (parameterName is Type)
// 2. Implemente a lógica de verificação
// 3. Use em condicionais para fazer narrowing

interface Quadrado {
  tipo: "quadrado";
  lado: number;
}

interface Circulo {
  tipo: "circulo";
  raio: number;
}

type Forma = Quadrado | Circulo;

function isQuadrado(forma: Forma): forma is Quadrado {
  return forma.tipo === "quadrado";
}

function calcularArea(forma: Forma): number {
  if (isQuadrado(forma)) {
    // forma é Quadrado
    return forma.lado * forma.lado;
  } else {
    // forma é Circulo
    return Math.PI * forma.raio * forma.raio;
  }
}

console.log(calcularArea({ tipo: "quadrado", lado: 5 }));
console.log(calcularArea({ tipo: "circulo", raio: 3 }));
