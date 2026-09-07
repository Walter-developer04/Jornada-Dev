// 1. O que e:
// Sao metodos especiais de leitura (get) e escrita (set) que controlam o acesso a uma propriedade.
//
// 2. Para que serve:
// Servem para validar dados antes de grava-los e para fornecer valores calculados dinamicamente na leitura.
//
// 3. Como usar:
// Definimos "get nome()" para ler e "set nome(valor)" para alterar, acessando-os como propriedades comuns.
//
// 4. Quando usar:
// Quando for necessario aplicar regras de validacao ao atribuir valores ou derivar informacoes sob demanda.
//
// 5. Quando NAO usar:
// Para atributos simples que nao demandam nenhuma verificacao previa nem calculo intermediario.

class CampoTexto {
  constructor(rotulo) {
    this.rotulo = rotulo;
    this.conteudo = "";
  }

  get tamanho() {
    return this.conteudo.length;
  }

  set texto(novoTexto) {
    if (novoTexto.trim() !== "") {
      this.conteudo = novoTexto;
    }
  }
}

const campoNome = new CampoTexto("Nome do Usuario");
campoNome.texto = "Maradona";

console.log(campoNome.conteudo);
console.log(campoNome.tamanho);
