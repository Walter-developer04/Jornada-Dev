"use strict";
/**
 * ===================================================
 *  EXERCICIO 08 - NARROWING COM O OPERADOR IN
 * ===================================================
 *  O QUE E:      Estreitamento de unioes de objetos testando a presenca de uma propriedade.
 *  O QUE FAZ:    Verifica em tempo de execucao se a chave existe no objeto para bifurcar o tipo.
 *  SINTAXE:      if ("propriedade" in objeto) { ... }
 *  QUANDO USAR:  Ao diferenciar tipos em uma uniao quando nao ha uma tag discriminante comum.
 *  QUANDO NAO:   Se ambos os objetos puderem conter a propriedade opcional com tipos diferentes.
 * ===================================================
 */
function obterDocumento(titular) {
    if ("cpf" in titular) {
        // O TypeScript assegura que titular e PessoaFisica
        return "CPF: " + titular.cpf;
    }
    // Aqui titular so pode ser PessoaJuridica
    return "CNPJ: " + titular.cnpj;
}
// 2. EXEMPLO INCORRETO
// Acessar propriedade especifica sem a verificacao de presenca gera erro de tipo
function exibirRazaoSocial(titular) {
    // @ts-expect-error - A propriedade 'razaoSocial' nao existe no tipo 'PessoaFisica'
    return titular.razaoSocial;
}
function obterPotencia(item) {
    if ("velocidadeMaxima" in item) {
        return item.velocidadeMaxima;
    }
    return item.forcaTracao;
}
// Solucao comentada:
// if ("velocidadeMaxima" in item) { return item.velocidadeMaxima; }
// return item.forcaTracao;
