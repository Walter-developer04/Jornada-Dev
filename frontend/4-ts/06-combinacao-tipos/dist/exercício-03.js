"use strict";
/**
 * ===================================================
 *  EXERCICIO 03 - UNION DE LITERAL TYPES
 * ===================================================
 *  O QUE E:      Uniao restrita a valores literais especificos e imutaveis.
 *  O QUE FAZ:    Impede valores arbitrarios aceitando apenas strings ou numeros exatos.
 *  SINTAXE:      type Opcao = "opcao1" | "opcao2" | "opcao3";
 *  QUANDO USAR:  Para estados de negocio, direcoes, tipos de eventos e enumeradores concisos.
 *  QUANDO NAO:   Quando o conjunto de valores for aberto ou dinamico em tempo de execucao.
 * ===================================================
 */
let statusAtual = "pendente";
statusAtual = "processando";
function atualizarStatus(novoStatus) {
    statusAtual = novoStatus;
}
atualizarStatus("enviado");
// 2. EXEMPLO INCORRETO
// Valores fora dos literais explicitados sao rejeitados pelo compilador
// @ts-expect-error - O tipo '"cancelado_pelo_usuario"' nao e atribuivel ao tipo 'StatusPedido'
atualizarStatus("cancelado_pelo_usuario");
const prioridadeAtual = "alta";
// Solucao comentada:
// type Prioridade = "baixa" | "media" | "alta";
// const prioridadeAtual: Prioridade = "alta";
