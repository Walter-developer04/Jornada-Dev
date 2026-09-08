
// O que é?
// O TypeScript verifica as assinaturas de cima para baixo.

// Regra:
// Assinaturas mais específicas devem vir antes das mais genéricas.

interface Resultado {
  dados: string;
}

function buscar(id: number): Resultado;
function buscar(id: number, completo: true): Resultado;
function buscar(id: number, completo: false): string;
function buscar(id: number, completo?: boolean): Resultado | string {
  if (completo) {
    return { dados: `Dados completos de ${id}` };
  }
  return `Dados simples de ${id}`;
}

console.log(buscar(1));
console.log(buscar(1, true));
console.log(buscar(1, false));

