// O que é?
// Valores falsy são convertidos para false em condições JavaScript.

// Valores falsy:
// 0, NaN, "" (string vazia), 0n (bigint zero), null, undefined

// Para que serve?
// Saber quais valores são tratados como false ajuda a evitar bugs.

function verificarValor(valor: string | number | null | undefined) {
  if (valor) {
    // valor é truthy (não é string vazia, 0, null ou undefined)
    console.log("Valor existe:", valor);
  } else {
    // valor é falsy
    console.log("Valor não existe ou é zero/vazio");
  }
}

verificarValor("texto");
verificarValor(42);
verificarValor("");
verificarValor(0);
verificarValor(null);
verificarValor(undefined);
