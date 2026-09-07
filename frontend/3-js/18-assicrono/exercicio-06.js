/**
 * EXERCICIO 06: Promises (Promessas)
 *
 * 1. O QUE É UMA PROMISE?
 * Uma Promise é um objeto que representa a eventual conclusão (com sucesso) ou falha
 * de uma operação assíncrona e seu valor resultante.
 *
 * 2. PARA QUE SERVE?
 * Serve para resolver os problemas de legibilidade do Callback Hell, fornecendo uma
 * estrutura linear de encadeamento e tratamento de erros padronizado e centralizado.
 *
 * 3. QUAIS SÃO OS ESTADOS DE UMA PROMISE?
 * Uma Promise possui 3 estados mutuamente exclusivos:
 *   - pending (pendente): Estado inicial. A operação ainda não foi concluída nem rejeitada.
 *   - fulfilled (realizada / resolvida): A operação foi concluída com sucesso (retorna um valor).
 *   - rejected (rejeitada): A operação falhou (retorna um motivo ou objeto de erro).
 * Quando uma Promise atinge fulfilled ou rejected, diz-se que ela está "settled" (liquidada).
 * REGRA: O estado de uma Promise liquidada é IMUTÁVEL. Ela não pode mudar de valor ou estado.
 *
 * 4. QUAL É A SINTAXE?
 * - Criação:
 *   const p = new Promise((resolve, reject) => {
 *     if (sucesso) resolve(dado);
 *     else reject(erro);
 *   });
 * - Consumo:
 *   p.then(dado => { ... })
 *    .catch(erro => { ... })
 *    .finally(() => { ... });
 *
 * 5. NÃO CONFUNDA:
 * - Uma Promise NÃO é uma thread de sistema separada. O JavaScript continua executando
 *   na mesma thread. O que ela faz é organizar o agendamento de reações assíncronas
 *   na Microtask Queue.
 *
 * 6. ERROS COMUNS E CUIDADOS:
 * - ERRO COMUM: Esquecer de retornar o resultado dentro de um .then(), quebrando o
 *   encadeamento (Promise Chaining).
 * - CUIDADO: Não adicionar o método .catch() ao final da cadeia pode gerar erros do tipo
 *   UnhandledPromiseRejection (Rejeição de Promessa Não Tratada).
 * - REGRA: O método .finally() executa sempre que a Promise for liquidada, seja com
 *   sucesso ou com erro, sendo ideal para encerramentos de conexão e limpezas de estado.
 */

console.log("=== EXERCÍCIO 06: PROMISES ===");

// 1. Criação de uma função que encapsula uma Promise
function verificarDisponibilidadeItem(item, quantidadeSolicitada) {
  return new Promise((resolve, reject) => {
    console.log(`[Promise] Verificando estoque para: ${item}...`);

    setTimeout(() => {
      const estoqueAtual = 10;

      if (quantidadeSolicitada <= estoqueAtual) {
        // Operação bem-sucedida: muda o estado para fulfilled
        resolve({
          item: item,
          quantidade: quantidadeSolicitada,
          status: "Disponível"
        });
      } else {
        // Falha: muda o estado para rejected
        reject(new Error(`Estoque insuficiente de ${item}. Disponível: ${estoqueAtual}, Solicitado: ${quantidadeSolicitada}`));
      }
    }, 200);
  });
}

// 2. Consumo da Promise com encadeamento linear (.then / .catch / .finally)
verificarDisponibilidadeItem("Monitor UltraWide", 2)
  .then((resultadoEstoque) => {
    console.log("[Promise] Sucesso etapa 1:", resultadoEstoque);
    // Retornamos um novo valor para a próxima etapa do encadeamento
    return `Reserva confirmada para ${resultadoEstoque.quantidade} unidade(s) de ${resultadoEstoque.item}.`;
  })
  .then((mensagemConfirmacao) => {
    console.log("[Promise] Sucesso etapa 2:", mensagemConfirmacao);
  })
  .catch((erro) => {
    // Captura centralizada: trata qualquer erro ocorrido nas etapas anteriores
    console.error("[Promise] Erro capturado:", erro.message);
  })
  .finally(() => {
    // Executado sempre, independentemente do desfecho
    console.log("[Promise] Bloco .finally concluído: Consulta finalizada.");
  });