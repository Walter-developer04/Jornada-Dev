// O que é?
// Um parâmetro 'rest' é tratado pelo compilador como uma série infinita de parâmetros opcionais.
// Isso facilita a compatibilidade com funções que recebem múltiplos argumentos.

let fnRest = (...args: number[]) => {};
let fnNormal = (a: number, b: number) => {};

// OK: 'fnRest' pode aceitar qualquer quantidade de números, logo atende 'fnNormal'.
fnNormal = fnRest;
