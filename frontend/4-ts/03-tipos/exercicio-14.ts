// Enumerações com "enum".
//
// Para que isso serve?
// Permite declarar um conjunto de constantes nomeadas, facilitando a legibilidade e organização de opções e estados finitos no código.
//
// Qual comportamento devo observar?
// O enum mapeia opções legíveis, impedindo o uso de valores literais soltos e restringindo escolhas ao grupo pré-definido.

enum CategoriaChamado {
  Duvida,
  Sugestao,
  Reclamacao,
}

const chamadoAtual: CategoriaChamado = CategoriaChamado.Sugestao;

console.log(chamadoAtual);
