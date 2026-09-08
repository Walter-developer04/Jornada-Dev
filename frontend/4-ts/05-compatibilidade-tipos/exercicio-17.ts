// O que é?
// 'unknown' é o tipo seguro superior. Tudo pode ser atribuído a 'unknown'.
// Porém, 'unknown' não pode ser atribuído a nenhum outro tipo (exceto 'any' e 'unknown').

let u: unknown = 10;
let u2: unknown = "texto";

// Erro esperado:
// O tipo 'unknown' não é atribuível ao tipo 'number'. É necessário fazer type narrowing antes.
// let num: number = u;
