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

// 1. EXEMPLO CORRETO
type PessoaFisica = {
  nome: string;
  cpf: string;
};

type PessoaJuridica = {
  razaoSocial: string;
  cnpj: string;
};

type TitularConta = PessoaFisica | PessoaJuridica;

function obterDocumento(titular: TitularConta): string {
  if ("cpf" in titular) {
    // O TypeScript assegura que titular e PessoaFisica
    return "CPF: " + titular.cpf;
  }
  // Aqui titular so pode ser PessoaJuridica
  return "CNPJ: " + titular.cnpj;
}

// 2. EXEMPLO INCORRETO
// Acessar propriedade especifica sem a verificacao de presenca gera erro de tipo
function exibirRazaoSocial(titular: TitularConta): string {
  // @ts-expect-error - A propriedade 'razaoSocial' nao existe no tipo 'PessoaFisica'
  return titular.razaoSocial;
}

// 3. MINI-DESAFIO
// Complete a funcao utilizando o operador 'in' para ler 'velocidadeMaxima' de VeiculoMotorizado.
type VeiculoMotorizado = { velocidadeMaxima: number };
type VeiculoTracao = { forcaTracao: number };
type Locomocao = VeiculoMotorizado | VeiculoTracao;

function obterPotencia(item: Locomocao): number {
  if ("velocidadeMaxima" in item) {
    return item.velocidadeMaxima;
  }
  return item.forcaTracao;
}

// Solucao comentada:
// if ("velocidadeMaxima" in item) { return item.velocidadeMaxima; }
// return item.forcaTracao;
