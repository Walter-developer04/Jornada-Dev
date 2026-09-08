// O que é?
// Arrays em JavaScript são objetos, então typeof retorna "object" para arrays.

// Limitação:
// typeof não diferencia arrays de outros objetos.

// Para que serve?
// Entender quando typeof é insuficiente e você precisa de outras técnicas.

function processar(valor: string | string[] | number[]) {
  if (typeof valor === "object") {
    // valor é string[] | number[]
    // Não podemos usar typeof para saber qual tipo de array
    console.log(valor.length);
  } else {
    // valor é string
    console.log(valor.toUpperCase());
  }
}

processar("texto");
processar(["a", "b"]);
processar([1, 2, 3]);
