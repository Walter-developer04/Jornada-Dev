"use strict";
/**
 * ===================================================
 *  EXERCICIO 13 - OPERADOR KEYOF COM UNIONS E INTERSECTIONS
 * ===================================================
 *  O QUE E:      Comportamento algebrico de 'keyof' aplicado sobre unioes e intersecoes de tipos.
 *  O QUE FAZ:    Demonstra que keyof (A | B) = (keyof A) & (keyof B) e keyof (A & B) = (keyof A) | (keyof B).
 *  SINTAXE:      type ChavesUniao = keyof (A | B); type ChavesInter = keyof (A & B);
 *  QUANDO USAR:  Para identificar propriedades comuns seguras em polimorfismo ou juncoes completas.
 *  QUANDO NAO:   Esperar que keyof de uma uniao retorne propriedades exclusivas de um dos membros.
 * ===================================================
 */
const campoComum = "conteudo";
const campoExclusivo = "totalLinhas";
// 2. EXEMPLO INCORRETO
// Tentar usar propriedade exclusiva como ChavesComuns falha no compilador
// @ts-expect-error - O tipo '"fonte"' nao e atribuivel a 'ChavesComunsDocumento' ("id" | "conteudo")
const chaveInvalidaNaUniao = "fonte";
