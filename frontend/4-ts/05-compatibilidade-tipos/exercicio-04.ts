// O que é?
// Funções com menos parâmetros podem ser atribuídas a tipos de funções com mais parâmetros.
// Ignorar parâmetros extras é uma prática comum e permitida no JavaScript/TypeScript.

let x = (a: number) => 0;
let y = (b: number, s: string) => 0;

// OK: 'x' ignora o segundo parâmetro exigido por 'y'.
y = x;

// Erro esperado: 'y' exige um parâmetro string que 'x' não fornece.
// x = y;
