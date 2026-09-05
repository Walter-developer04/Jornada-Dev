// Operador de asserção de não-nulo (Non-null Assertion Operator: !).
//
// Para que isso serve?
// Serve para indicar manualmente ao compilador que uma expressão não terá valor "null" ou "undefined" naquele momento.
//
// Qual comportamento devo observar?
// O operador remove "null" e "undefined" apenas na análise de tipos estática, mas não gera nenhuma validação em tempo de execução. Exige cuidado para evitar falhas reais.

let identificadorCliente: string | null = "CLI-9842";

// Afirmamos ao TypeScript que o identificador possui valor preenchido neste ponto:
const identificadorGarantido: string = identificadorCliente!;

console.log(identificadorGarantido);
