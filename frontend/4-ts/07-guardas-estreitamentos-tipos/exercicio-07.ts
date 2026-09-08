// O que é?
// Truthiness pode ser problemático quando valores válidos também são falsy.

// Problema:
// Uma string vazia "" é válida, mas é falsy.

// Por que importa?
// if (strs) não trata string vazia corretamente se você esperava tratar apenas null.

function printAllProblematico(strs: string | string[] | null) {
  // NÃO FAÇA ISSO se string vazia for um valor válido!
  if (strs) {
    if (typeof strs === "object") {
      for (const s of strs) {
        console.log(s);
      }
    } else if (typeof strs === "string") {
      console.log(strs);
    }
  }
  // String vazia foi tratada como se fosse null!
}

printAllProblematico(""); // Nada é impresso (bug!)
printAllProblematico(null); // Nada é impresso (correto)
