// Exercício 09: Lexical Scoping (Escopo Léxico)

// O escopo léxico estabelece que a resolução de variáveis é definida pelo local físico
// onde as funções foram declaradas no código-fonte, e não pelo local onde são executadas.

const nivelGlobal = "Global";

function funcaoExterna() {
  const nivelExterno = "Externo";

  function funcaoInterna() {
    // 'funcaoInterna' foi escrita dentro de 'funcaoExterna'.
    // Logo, tem acesso às variáveis de seu próprio escopo, do escopo pai e do global.
    console.log("Acesso ao nível externo:", nivelExterno);
    console.log("Acesso ao nível global:", nivelGlobal);
  }

  funcaoInterna();
}

funcaoExterna();