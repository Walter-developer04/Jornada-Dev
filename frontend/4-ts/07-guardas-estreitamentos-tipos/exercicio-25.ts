// O que é?
// TypeScript 5.5+ pode inferir type predicates automaticamente.

// Para que serve?
// Não precisa escrever "parameterName is Type" explicitamente em casos simples.

// Condições para inferência:
// 1. Função não tem tipo de retorno explícito
// 2. Função tem apenas um return
// 3. Função não muta o parâmetro
// 4. Retorna uma expressão boolean que refina o parâmetro

interface Bird {
  name: string;
  sing(): void;
}

declare const birds: Map<string, Bird>;

function makeBirdCalls(countries: string[]) {
  // birds: Bird[] (não mais (Bird | undefined)[])
  const birdsReal = countries
    .map(country => birds.get(country))
    .filter(bird => bird !== undefined);

  for (const bird of birdsReal) {
    bird.sing(); // OK! TypeScript sabe que bird é Bird
  }
}

// A função filter infere: (bird: Bird | undefined) => bird is Bird
