"use strict";
/**
 * ===================================================
 *  EXERCICIO 07 - TYPE ALIASES VS INTERFACES NA COMBINACAO
 * ===================================================
 *  O QUE E:      Distincoes fundamentais entre 'type' e 'interface' ao combinar contratos.
 *  O QUE FAZ:    Demonstra que interfaces estendem via 'extends', mas unioes exigem 'type'.
 *  SINTAXE:      interface B extends A {} versus type C = A | B;
 *  QUANDO USAR:  Use interface para modelos orientados a objetos; use type para unioes e tuplas.
 *  QUANDO NAO:   Nao use interface quando precisar representar uma uniao direta de tipos.
 * ===================================================
 */
const meuCarro = {
    marca: "Nacional",
    ano: 2024,
    quantidadePortas: 4,
};
string | number;
// Solucao comentada:
// interface Publicacao { titulo: string; }
// type StatusPublicacao = "rascunho" | "publicado";
