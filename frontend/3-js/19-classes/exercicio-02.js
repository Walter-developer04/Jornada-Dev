// 1. O que e:
// O constructor e um metodo especial executado automaticamente no momento em que criamos um objeto com new.
//
// 2. Para que serve:
// Serve para receber argumentos iniciais e inicializar as propriedades exclusivas de cada objeto via this.
//
// 3. Como usar:
// Definimos constructor(parametros) dentro da classe e atribuimos os valores com this.propriedade = parametro.
//
// 4. Quando usar:
// Quando cada objeto criado a partir da classe precisar começar com dados e configuracoes especificas.
//
// 5. Quando NAO usar:
// Quando todos os objetos sempre tiverem valores identicos e fixos, sem necessidade de dados iniciais.

class Botao {
  constructor(rotulo, cor) {
    this.rotulo = rotulo;
    this.cor = cor;
  }
}

const botaoSalvar = new Botao("Salvar", "verde");
const botaoCancelar = new Botao("Cancelar", "vermelho");

console.log(botaoSalvar.rotulo);
console.log(botaoCancelar.cor);
