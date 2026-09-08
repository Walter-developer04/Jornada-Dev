// O que é?
// O tipo 'any' é compatível com quase todos os tipos (exceto 'never').
// Ele pode receber qualquer valor e pode ser atribuído a qualquer variável.

let a: any = 10;
let num: number = a;
let str: string = a;

// OK em todas as direções, sacrificando a segurança de tipos.
a = "texto";
a = true;
