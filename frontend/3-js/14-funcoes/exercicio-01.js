// =============================================================
// O QUE E UMA FUNCAO?
// =============================================================
// Uma funcao e um bloco de codigo reutilizavel que executa uma
// tarefa especifica. Em vez de repetir o mesmo codigo em varios
// lugares, voce o define uma vez e chama quantas vezes precisar.
//
// -------------------------------------------------------------
// SINTAXE (Function Declaration)
// -------------------------------------------------------------
//
//   function nomeDaFuncao(parametro1, parametro2) {
//     // corpo: instrucoes a serem executadas
//     return resultado; // opcional
//   }
//
// -------------------------------------------------------------
// PARA QUE SERVE?
// -------------------------------------------------------------
//  - Organizar o codigo em blocos com responsabilidade unica
//  - Evitar repeticao (principio DRY: Don't Repeat Yourself)
//  - Tornar o codigo legivel, testavel e facil de manter
//  - Receber dados de entrada (parametros) e devolver um resultado (return)
//
// -------------------------------------------------------------
// QUANDO USAR?
// -------------------------------------------------------------
//  - Sempre que uma logica se repetir em mais de um lugar
//  - Sempre que um trecho de codigo puder ter um nome descritivo
//  - Para separar responsabilidades (ex: calcular, exibir, validar)


// Exercício 01: Default Params (Parâmetros Padrão)

// O parâmetro 'saudacao' possui o valor padrão "Olá".
// Esse valor é usado quando o argumento correspondente é omitido ou recebe 'undefined'.
function saudar(nome, saudacao = "Olá") {
  return `${saudacao}, ${nome}!`;
}

// 1. Chamada sem o segundo argumento: utiliza o valor padrão.
console.log(saudar("Maria")); // "Olá, Maria!"

// 2. Chamada enviando o segundo argumento: substitui o valor padrão.
console.log(saudar("Carlos", "Bem-vindo")); // "Bem-vindo, Carlos!"

// 3. Diferença entre Default Params e o operador '||':
// O parâmetro padrão só é ativado se o valor for estritamente 'undefined'.
// Valores falsy legítimos (como string vazia "") são preservados e não acionam o padrão:
console.log(saudar("Ana", "")); // ", Ana!" (a string vazia foi mantida)