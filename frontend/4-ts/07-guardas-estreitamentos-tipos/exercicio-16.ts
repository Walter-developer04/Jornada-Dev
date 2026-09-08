// O que é?
// instanceof verifica se um objeto é instância de uma classe.

// Para que serve?
// O TypeScript usa instanceof como type guard para narrowing.

// Como funciona?
// x instanceof Foo verifica se Foo.prototype está na cadeia de protótipos de x.

// Sintaxe:
// if (valor instanceof Classe) { /* valor é Classe */ }

function logValue(x: Date | string) {
  if (x instanceof Date) {
    // x é Date
    console.log(x.toUTCString());
  } else {
    // x é string
    console.log(x.toUpperCase());
  }
}

logValue(new Date());
logValue("texto");
