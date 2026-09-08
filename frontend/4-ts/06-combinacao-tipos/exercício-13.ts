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

// 1. EXEMPLO CORRETO
type DocumentoTexto = {
  id: string;
  conteudo: string;
  fonte: string;
};

type DocumentoPlanilha = {
  id: string;
  conteudo: string;
  totalLinhas: number;
};

// keyof (A | B) extrai apenas as chaves COMUNS (intersecao de chaves): "id" | "conteudo"
type ChavesComunsDocumento = keyof (DocumentoTexto | DocumentoPlanilha);
const campoComum: ChavesComunsDocumento = "conteudo";

// keyof (A & B) extrai TODAS as chaves (uniao de chaves): "id" | "conteudo" | "fonte" | "totalLinhas"
type TodasChavesDocumento = keyof (DocumentoTexto & DocumentoPlanilha);
const campoExclusivo: TodasChavesDocumento = "totalLinhas";

// 2. EXEMPLO INCORRETO
// Tentar usar propriedade exclusiva como ChavesComuns falha no compilador
// @ts-expect-error - O tipo '"fonte"' nao e atribuivel a 'ChavesComunsDocumento' ("id" | "conteudo")
const chaveInvalidaNaUniao: ChavesComunsDocumento = "fonte";

// 3. MINI-DESAFIO
// Identifique a unica chave comum entre 'Pessoa' e 'Empresa' tipando 'ChaveComum'.
type Pessoa = { idEntidade: number; nome: string };
type Empresa = { idEntidade: number; razaoSocial: string };
type ChaveComum = keyof (Pessoa | Empresa);


