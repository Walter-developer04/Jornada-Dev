/**
 * ===================================================
 *  EXERCICIO 09 - NARROWING COM INSTANCEOF
 * ===================================================
 *  O QUE E:      Estreitamento baseado na cadeia de prototipos de instancias de classes.
 *  O QUE FAZ:    Identifica qual classe gerou a instancia em tempo de execucao e refina a uniao.
 *  SINTAXE:      if (instancia instanceof NomeDaClasse) { ... }
 *  QUANDO USAR:  Para tratamento de erros especializados, entidades de dominio instanciadas com 'new'.
 *  QUANDO NAO:   Nao funciona com type aliases puros ou interfaces (eles nao existem no runtime).
 * ===================================================
 */

// 1. EXEMPLO CORRETO
class FalhaValidacao extends Error {
  campoInvalido: string;
  constructor(mensagem: string, campo: string) {
    super(mensagem);
    this.campoInvalido = campo;
  }
}

class FalhaRede extends Error {
  codigoStatusHttp: number;
  constructor(mensagem: string, codigo: number) {
    super(mensagem);
    this.codigoStatusHttp = codigo;
  }
}

type ErroDominio = FalhaValidacao | FalhaRede;

function processarExcecao(erro: ErroDominio): string {
  if (erro instanceof FalhaValidacao) {
    return "Validacao falhou no campo: " + erro.campoInvalido;
  }
  return "Erro de conexao com codigo: " + erro.codigoStatusHttp;
}

// 2. EXEMPLO INCORRETO
// instanceof nao funciona com interfaces nem type aliases de objetos literais
type EstruturaSimples = { dado: string };
const objetoAnonimo = { dado: "teste" };
// @ts-expect-error - 'EstruturaSimples' e apenas um tipo e nao existe como valor no runtime
const ehTipo = objetoAnonimo instanceof EstruturaSimples;

// 3. MINI-DESAFIO
// Complete a funcao para retornar true apenas se o erro recebido for instancia de FalhaRede.
function verificarSeErroDeRede(erro: ErroDominio): boolean {
  return erro instanceof FalhaRede;
}

// Solucao comentada:
// function verificarSeErroDeRede(erro: ErroDominio): boolean {
//   return erro instanceof FalhaRede;
// }
