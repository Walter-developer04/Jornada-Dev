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

// 1. EXEMPLO CORRETO
interface Veiculo {
  marca: string;
  ano: number;
}

// Interfaces podem estender outras interfaces
interface CarroPasseio extends Veiculo {
  quantidadePortas: number;
}

// Type aliases sao obrigatorios para representar a uniao de tipos
type TipoCombustivel = "gasolina" | "etanol" | "eletrico";
type MeioTransporte = CarroPasseio | { tipo: "bicicleta"; marchas: number };

const meuCarro: CarroPasseio = {
  marca: "Nacional",
  ano: 2024,
  quantidadePortas: 4,
};

// 2. EXEMPLO INCORRETO
// Uma interface nao pode usar sintaxe de uniao em sua declaracao
// @ts-expect-error - Sintaxe invalida: interfaces nao declaram unioes diretamente
interface OpcaoInvalida = string | number;

// 3. MINI-DESAFIO
// Declare uma interface 'Publicacao' (com titulo: string) e use 'type' para criar a uniao 'StatusPublicacao'
// com "rascunho" ou "publicado".
interface Publicacao {
  titulo: string;
}
type StatusPublicacao = "rascunho" | "publicado";

// Solucao comentada:
// interface Publicacao { titulo: string; }
// type StatusPublicacao = "rascunho" | "publicado";
