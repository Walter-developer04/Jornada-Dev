// O que é?
// Com 'strictNullChecks' ativado, 'null' e 'undefined' só são atribuíveis
// a eles mesmos, a 'void' (apenas undefined) e aos tipos 'any' e 'unknown'.

let n: null = null;
let u: undefined = undefined;
let a: any = n;
let unk: unknown = u;
let v: void = undefined;

// Erro esperado com strictNullChecks ativado:
// O tipo 'undefined' não é atribuível ao tipo 'number'.
// let num: number = u;
