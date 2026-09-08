"use strict";
/**
 * ===================================================
 *  EXERCICIO 12 - OPERADOR KEYOF COM TIPOS DE OBJETOS
 * ===================================================
 *  O QUE E:      Operador de tipo que extrai os nomes das chaves publicas de um tipo de objeto.
 *  O QUE FAZ:    Produz uma uniao de literais contendo as strings/numeros que representam as chaves.
 *  SINTAXE:      type Chaves = keyof TipoObjeto;
 *  QUANDO USAR:  Para garantir acesso seguro a propriedades, funcoes get/set e validacao de campos.
 *  QUANDO NAO:   Nao usar em valores em tempo de execucao (keyof opera exclusivamente no sistema de tipos).
 * ===================================================
 */
const chaveValida1 = "host";
const chaveValida2 = "porta";
function obterNomePropriedade(chave) {
    return "Propriedade lida: " + chave;
}
// 2. EXEMPLO INCORRETO
// Passar qualquer string que nao faca parte das chaves gera rejeicao do compilador
// @ts-expect-error - O tipo '"ambiente"' nao e atribuivel ao tipo 'keyof ConfiguracaoSistema'
const chaveInvalida = "ambiente";
// Solucao comentada:
// type ChaveProduto = keyof ProdutoEstoque;
