// O que é?
// Operadores && e || também fazem narrowing baseado em truthiness.

// Para que serve?
// && executa o lado direito apenas se o esquerdo for truthy.
// || executa o lado direito apenas se o esquerdo for falsy.

function exemploLogico(valor: string | null | undefined) {
  // &&: se valor for truthy, executa o console.log
  valor && console.log(valor.toUpperCase());

  // ||: se valor for falsy, usa "padrão"
  const resultado = valor || "padrão";
  console.log(resultado);
}

exemploLogico("texto");
exemploLogico(null);
exemploLogico("");
