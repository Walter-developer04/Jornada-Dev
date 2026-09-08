/**
 * ===================================================
 *  EXERCICIO 02 - UNION TYPES BASICOS COM PRIMITIVOS
 * ===================================================
 *  O QUE E:      Mecanismo que permite a um valor assumir um entre varios tipos com o operador pipe.
 *  O QUE FAZ:    Recebe parametros que aceitam mais de um tipo e executa operacoes compativeis.
 *  SINTAXE:      type MeuTipo = TipoA | TipoB;
 *  QUANDO USAR:  Quando uma variavel ou funcao lida legitimamente com dados de formatos distintos.
 *  QUANDO NAO:   Evitar misturar tipos descorrelacionados que dificultem o tratamento posterior.
 * ===================================================
 */

// 1. EXEMPLO CORRETO
type CodigoIdentificacao = string | number;

function exibirIdentificador(codigo: CodigoIdentificacao): string {
  // toString e seguro pois existe tanto em string quanto em number
  return "Registro: " + codigo.toString();
}

const codigoTexto = exibirIdentificador("ABC-123");
const codigoNumero = exibirIdentificador(789456);

// 2. EXEMPLO INCORRETO
// Chamar metodos exclusivos de um tipo sem narrowing resulta em erro
function converterTexto(codigo: CodigoIdentificacao): string {
  // @ts-expect-error - A propriedade 'toUpperCase' nao existe no tipo 'number'
  return codigo.toUpperCase();
}

// 3. MINI-DESAFIO
// Crie uma funcao que receba 'sucesso: boolean | string' e retorne sempre uma string explicativa.
function traduzirStatus(sucesso: boolean | string): string {
  return sucesso ? "Operacao concluida" : "Operacao pendente";
}

// Solucao comentada:
// function traduzirStatus(sucesso: boolean | string): string {
//   return typeof sucesso === "string" ? sucesso : sucesso ? "Sim" : "Nao";
// }
