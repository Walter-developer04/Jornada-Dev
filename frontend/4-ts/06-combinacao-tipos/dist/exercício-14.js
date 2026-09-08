"use strict";
/**
 * ===================================================
 *  EXERCICIO 14 - TYPE GUARDS PERSONALIZADOS (PREDICADOS)
 * ===================================================
 *  O QUE E:      Funcoes predicadas definidas pelo usuario que instruem o compilador no narrowing.
 *  O QUE FAZ:    Retorna booleano e associa o valor verificado a um tipo por 'parametro is Tipo'.
 *  SINTAXE:      function ehTipo(x: Desconhecido): x is TipoAlvo { ... }
 *  QUANDO USAR:  Para validacoes logicas complexas de tipos de objetos em unioes e dados externos.
 *  QUANDO NAO:   Nao use retorno boolean simples quando pretender que a funcao refine tipos em 'if'.
 * ===================================================
 */
// A assinatura 'pessoa is Coordenador' e o predicado de tipo
function ehCoordenador(pessoa) {
    return "liderados" in pessoa && Array.isArray(pessoa.liderados);
}
function processarAcessos(pessoa) {
    if (ehCoordenador(pessoa)) {
        // Aqui pessoa e estreitada com seguranca para Coordenador
        return "Coordenador lidera " + pessoa.liderados.length + " pessoas.";
    }
    return "Funcionario comum: " + pessoa.nome;
}
// 2. EXEMPLO INCORRETO
// Retornar 'boolean' convencional nao executa o narrowing no bloco condicional
function checarCoordenadorSemPredicado(pessoa) {
    return "liderados" in pessoa;
}
function tentarAcessoInseguro(pessoa) {
    if (checarCoordenadorSemPredicado(pessoa)) {
        // @ts-expect-error - A propriedade 'verbaSetor' nao existe no tipo 'FuncionarioComum'
        return pessoa.verbaSetor;
    }
    return 0;
}
// 3. MINI-DESAFIO
// Complete o type guard customizado para validar se um dado 'valor: unknown' e string.
function ehString(valor) {
    return typeof valor === "string";
}
// Solucao comentada:
// function ehString(valor: unknown): valor is string { return typeof valor === "string"; }
