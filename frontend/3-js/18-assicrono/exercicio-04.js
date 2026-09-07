/**
 * EXERCICIO 04: Callbacks (Funções de Retorno)
 *
 * 1. O QUE É UMA CALLBACK?
 * Uma callback é simplesmente uma função passada como argumento para outra função,
 * com o objetivo de ser invocada ("chamada de volta") em um momento determinado.
 *
 * 2. POR QUE ISSO É POSSÍVEL NO JAVASCRIPT?
 * Porque funções em JavaScript são "Cidadãos de Primeira Classe" (First-Class Citizens).
 * Isso significa que funções podem ser atribuídas a variáveis, armazenadas em objetos,
 * passadas como parâmetros para outras funções e retornadas por outras funções.
 *
 * 3. PARA QUE SERVE?
 * Serve para parametrizar comportamentos (inversão de controle). A função que recebe a
 * callback decide QUANDO executá-la, enquanto quem chamou define O QUE deve ser feito.
 *
 * 4. QUAL É A SINTAXE BÁSICA?
 * function operacao(dado, callback) {
 *   // realiza algo
 *   callback(resultado);
 * }
 *
 * 5. NÃO CONFUNDA: CALLBACK SÍNCRONA VS. CALLBACK ASSÍNCRONA!
 * - Callback Síncrona: Executa imediatamente dentro da mesma chamada da pilha.
 *   Exemplos: Array.prototype.map, forEach, filter.
 * - Callback Assíncrona: Executa posteriormente, após ser agendada pelo Event Loop.
 *   Exemplos: setTimeout, manipulação de eventos (addEventListener), fs.readFile no Node.
 *
 * 6. ERROS COMUNS E CUIDADOS:
 * - ERRO COMUM: Invocar a função na passagem do argumento: processar(executar()).
 *   Isso passa o resultado da função, e não a função em si. O correto é passar a
 *   referência: processar(executar).
 * - IMPORTANTE: Uma callback NÃO transforma um código em assíncrono magicamente.
 *   A assincronia depende de como a função receptora trata a execução.
 * - REGRA: Ao passar uma função como callback, garanta que os parâmetros esperados por
 *   ela correspondam aos argumentos enviados pela função que a invoca.
 */

console.log("=== EXERCÍCIO 04: CALLBACKS ===");

// 1. DEMONSTRAÇÃO DE CALLBACK SÍNCRONA
console.log("--- 1. Demonstração Síncrona ---");

function calcular(num1, num2, operacaoCallback) {
  // A função principal gerencia o fluxo, mas o cálculo é delegado à callback
  return operacaoCallback(num1, num2);
}

function somar(a, b) {
  return a + b;
}

function multiplicar(a, b) {
  return a * b;
}

const resultadoSoma = calcular(10, 5, somar);
const resultadoMult = calcular(10, 5, multiplicar);

console.log(`[Callback Síncrona] Resultado da soma: ${resultadoSoma}`);
console.log(`[Callback Síncrona] Resultado da multiplicação: ${resultadoMult}`);

// 2. DEMONSTRAÇÃO DE CALLBACK ASSÍNCRONA
console.log("\n--- 2. Demonstração Assíncrona ---");

function buscarUsuarioBanco(id, callbackSucesso) {
  console.log(`[Assíncrono] Buscando dados do usuário ${id} no banco simulado...`);
  setTimeout(() => {
    const usuarioRecuperado = {
      id: id,
      nome: "Clara",
      cargo: "Desenvolvedora Frontend"
    };
    // Chamando a callback passando o resultado obtido após a espera assíncrona
    callbackSucesso(usuarioRecuperado);
  }, 250);
}

// Passando uma arrow function como callback para processar o dado futuro
buscarUsuarioBanco(101, (usuario) => {
  console.log(`[Assíncrono] Callback disparada! Usuário: ${usuario.nome} | Cargo: ${usuario.cargo}`);
});