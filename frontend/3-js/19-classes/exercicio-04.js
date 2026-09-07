// 1. O que e:
// Herança e o recurso que permite a uma classe filha herdar propriedades e metodos de uma classe pai.
//
// 2. Para que serve:
// Serve para compartilhar regras comuns entre componentes relacionados sem precisar duplicar codigo.
//
// 3. Como usar:
// Usamos "extends NomePai" na classe filha e chamamos "super()" dentro do constructor para acionar o pai.
//
// 4. Quando usar:
// Quando existirem elementos com comportamento base compartilhado, mas com detalhes especificos para cada tipo.
//
// 5. Quando NAO usar:
// Quando as entidades forem completamente distintas e nao fizer sentido uma relacao do tipo "e um subtipo de".

class ElementoUI {
  constructor(identificador) {
    this.identificador = identificador;
    this.visivel = true;
  }

  ocultar() {
    this.visivel = false;
  }
}

class ModalAlerta extends ElementoUI {
  constructor(identificador, mensagem) {
    super(identificador);
    this.mensagem = mensagem;
  }

  descrever() {
    return "Modal [" + this.identificador + "]: " + this.mensagem + " - Visivel: " + this.visivel;
  }
}

const aviso = new ModalAlerta("alerta-01", "Dados salvos com sucesso!");
aviso.ocultar();

console.log(aviso.descrever());
