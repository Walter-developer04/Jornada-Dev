
// O que é?
// Tipos que descrevem a assinatura de uma função, sem a implementação.

// Para que serve?
// Tipar parâmetros que recebem outras funções (callbacks) ou criar aliases.

type OperacaoMatematica = (a: number, b: number) => number;

const executar = (a: number, b: number, operacao: OperacaoMatematica) => {
  return operacao(a, b);
};

const somar: OperacaoMatematica = (x, y) => x + y;
const dividir: OperacaoMatematica = (x, y) => x / y;

console.log(executar(10, 2, somar));
console.log(executar(10, 2, dividir));

