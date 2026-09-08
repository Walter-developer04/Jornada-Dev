
// O que é?
// Comparação entre usar overloads e usar union types ( | ).

// Quando usar:
// Se os tipos de retorno dependem de combinações específicas de parâmetros, use overloads.
// Se a entrada e saída são independentes ou simples, use union types.

// Com Union Types (mais simples):
function processarUniao(valor: string | number): string | number {
  return valor;
}

// Com Overloads (para dependência entre parâmetro e retorno):
function processarDependente(valor: string): string;
function processarDependente(valor: number): number;
function processarDependente(valor: any): any {
  return valor;
}

console.log(processarUniao("texto"));
console.log(processarDependente(100));

