// Diferente do JavaScript, o TypeScript realiza uma checagem estática em tempo de compilação.
// Como os parâmetros foram tipados explicitamente como 'number', o compilador bloqueia a chamada
// antes mesmo da execução, evitando a coerção implícita que geraria a string "23".
function somar2(a: number, b: number): number { 
  return a + b; 
}

console.log(somar2(2, "3")); 
// Erro de compilação: O argumento do tipo 'string' não pode ser atribuído ao parâmetro do tipo 'number'.
// O código não é executado normalmente como no JS; o erro é identificado antes do runtime.