"use strict";
/**
 * ===================================================
 *  EXERCICIO 11 - EXHAUSTIVENESS CHECKING COM O TIPO NEVER
 * ===================================================
 *  O QUE E:      Tecnica de checagem exaustiva de tipos com o tipo vazio 'never'.
 *  O QUE FAZ:    Gera erro em tempo de compilacao caso algum caso de uniao deixe de ser tratado.
 *  SINTAXE:      function checarExaustao(x: never): never { throw new Error(...); }
 *  QUANDO USAR:  Em switch/case sobre unioes discriminadas ou unioes de literais essenciais.
 *  QUANDO NAO:   Em casos onde a uniao e aberta ou o tratamento default generico e intencional.
 * ===================================================
 */
function asseverarExaustao(valor) {
    throw new Error("Caso nao tratado encontrado: " + JSON.stringify(valor));
}
function calcularPrazoEnvio(metodo) {
    switch (metodo) {
        case "correios":
            return 5;
        case "transportadora":
            return 2;
        case "retirada":
            return 0;
        default:
            // Se todos os casos foram tratados, metodo e inferido como 'never'
            return asseverarExaustao(metodo);
    }
}
function dispararNotificacao(tipo) {
    switch (tipo) {
        case "email":
            break;
        case "sms":
            break;
        // Omitido intencionalmente o case "push"
        default:
            // @ts-expect-error - O tipo 'string' ("push") nao e atribuivel ao tipo 'never'
            asseverarExaustao(tipo);
    }
}
function obterNomeCanal(canal) {
    switch (canal) {
        case "web":
            return "Navegador Web";
        case "mobile":
            return "Aplicativo Mobile";
        default:
            return asseverarExaustao(canal);
    }
}
// Solucao comentada:
// case "web": return "Navegador Web";
// case "mobile": return "Aplicativo Mobile";
