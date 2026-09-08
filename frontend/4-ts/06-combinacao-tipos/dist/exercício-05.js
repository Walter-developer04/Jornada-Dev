"use strict";
/**
 * ===================================================
 *  EXERCICIO 05 - INTERSECTION TYPES COM OBJETOS
 * ===================================================
 *  O QUE E:      Fusao de dois ou mais tipos de objetos em um unico tipo cumulativo.
 *  O QUE FAZ:    Exige que o valor resultante contenha todas as propriedades de cada tipo participante.
 *  SINTAXE:      type TipoCombinado = TipoA & TipoB;
 *  QUANDO USAR:  Para compor entidades, adicionar metadados e criar estruturas reutilizaveis.
 *  QUANDO NAO:   Nao tente combinar tipos primitivos disjuntos (string & number resulta em never).
 * ===================================================
 */
const novoUsuario = {
    id: 101,
    criadoEm: new Date(),
    nome: "Beatriz Oliveira",
    email: "beatriz@dominio.com",
};
// 2. EXEMPLO INCORRETO
// Deixar de fornecer propriedades de qualquer um dos lados da intersecao gera erro
// @ts-expect-error - A propriedade 'email' esta faltando no tipo fornecido
const usuarioIncompleto = {
    id: 102,
    criadoEm: new Date(),
    nome: "Lucas Santos",
};
// Solucao comentada:
// type DadosCadastrais = Endereco & Telefone;
