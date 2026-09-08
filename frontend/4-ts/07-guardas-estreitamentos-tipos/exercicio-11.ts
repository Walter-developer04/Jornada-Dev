// O que é?
// !== (desigualdade estrita) remove um tipo específico da union.

// Para que serve?
// Quando você verifica que algo NÃO é um valor, TypeScript remove esse valor.

// Sintaxe:
// if (valor !== null) { /* valor não é null */ }

function processar(valor: string | null | undefined) {
  if (valor !== null) {
    // valor é string | undefined
    console.log("Não é null:", valor);
  } else {
    // valor é null
    console.log("É null");
  }
}

processar("texto");
processar(null);
processar(undefined);
