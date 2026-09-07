// 1. O que e:
// Metodos de instancia sao funcoes declaradas na classe que representam acoes que os objetos podem executar.
//
// 2. Para que serve:
// Servem para manipular dados do proprio objeto ou executar operacoes relacionadas ao seu estado interno.
//
// 3. Como usar:
// Criamos a funcao sem a palavra function e a executamos no objeto instanciado usando objeto.metodo().
//
// 4. Quando usar:
// Quando o objeto precisar atualizar seus proprios atributos ou responder a interacoes do usuario.
//
// 5. Quando NAO usar:
// Quando a funcao for utilitaria e nao depender de nenhuma propriedade interna guardada no this.

class Contador {
  constructor(valorInicial) {
    this.valor = valorInicial;
  }

  incrementar() {
    this.valor += 1;
  }

  obterStatus() {
    return "Contagem atual: " + this.valor;
  }
}

const placar = new Contador(0);
placar.incrementar();
placar.incrementar();

console.log(placar.obterStatus());
