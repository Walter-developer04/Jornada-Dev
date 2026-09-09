/*
  O que é:
  A diferença entre guardar dados por valor (tipos primitivos:
  número, texto, booleano, null, undefined, símbolo, bigint) e
  guardar objetos por referência (objeto, array, função, Date).

  Para que serve:
  Serve para prever o comportamento da memória: quando duas
  variáveis apontam para o mesmo objeto, a mudança feita por uma
  delas é enxergada por todas as outras.

  Como funciona:
  Um primitivo vive direto na variável: atribuir copia o conteúdo.
  Um objeto vive no heap: a variável guarda apenas o endereço.
  Atribuir copia o endereço, e não o conteúdo. Os dois painéis da
  página permitem repetir esses experimentos com botões.

  Quando usar:
  Sempre que for preciso raciocinar sobre identidade de objetos,
  compartilhamento de estado e sobre quem mantém um objeto vivo.

  Quando não usar:
  Cópias reais com { ...objeto } isolam estados, mas copiar objetos
  grandes a todo momento gasta memória e processamento à toa;
  avalie se compartilhar a referência não resolve.
*/

const estado = {
  numeroA: 10,
  numeroB: null,
  objetoOriginal: { nome: "caixa", tamanho: 40 },
  objetoCopia: null,
  copiaIndependente: null
};

function elemento(id) {
  return document.getElementById(id);
}

function adicionarLinha(lista, destaque, explicacao) {
  const item = document.createElement("li");
  const forte = document.createElement("strong");
  forte.textContent = destaque;
  item.appendChild(forte);
  const detalhe = document.createElement("span");
  detalhe.textContent = " " + explicacao;
  item.appendChild(detalhe);
  lista.appendChild(item);
}

function escreverLeitura(id, texto) {
  elemento(id).textContent = texto;
}

function descreverObjeto(objeto) {
  return "{ nome: " + objeto.nome + ", tamanho: " + objeto.tamanho + " }";
}

// ---- Painel dos primitivos ----

function renderizarPrimitivos() {
  const lista = elemento("lista-primitivos");
  lista.textContent = "";
  adicionarLinha(lista, "numeroA = " + estado.numeroA, "valor original");
  if (estado.numeroB === null) {
    adicionarLinha(lista, "numeroB = null", "ainda sem cópia");
  } else {
    adicionarLinha(lista, "numeroB = " + estado.numeroB, "cópia independente do valor");
  }
}

function atribuirPrimitivo() {
  estado.numeroB = estado.numeroA;
  escreverLeitura("leitura-primitivo", "O valor foi copiado: numeroB agora tem o próprio 10, independente de numeroA.");
  renderizarPrimitivos();
}

function modificarPrimitivo() {
  if (estado.numeroB === null) {
    escreverLeitura("leitura-primitivo", "Primeiro execute numeroB = numeroA para existir uma cópia.");
    return;
  }
  estado.numeroB = 99;
  escreverLeitura("leitura-primitivo", "numeroB mudou para 99 e numeroA continua " + estado.numeroA + ": cópias de valor são independentes.");
  renderizarPrimitivos();
}

function reiniciarPrimitivo() {
  estado.numeroA = 10;
  estado.numeroB = null;
  escreverLeitura("leitura-primitivo", "Experimento reiniciado.");
  renderizarPrimitivos();
}

// ---- Painel dos objetos ----

function renderizarObjetos() {
  const lista = elemento("lista-objetos");
  lista.textContent = "";
  adicionarLinha(lista, "objetoOriginal = " + descreverObjeto(estado.objetoOriginal), "referência para o objeto no heap");
  if (estado.objetoCopia === null) {
    adicionarLinha(lista, "objetoCopia = null", "ainda sem referência");
  } else {
    adicionarLinha(lista, "objetoCopia = " + descreverObjeto(estado.objetoCopia), "aponta para o MESMO objeto");
  }
  if (estado.copiaIndependente === null) {
    adicionarLinha(lista, "copiaIndependente = null", "ainda sem cópia real");
  } else {
    adicionarLinha(lista, "copiaIndependente = " + descreverObjeto(estado.copiaIndependente), "objeto novo, nascido da cópia");
  }
}

function atribuirObjeto() {
  estado.objetoCopia = estado.objetoOriginal;
  escreverLeitura("leitura-objeto", "Só a referência foi copiada: continua existindo um único objeto na memória.");
  renderizarObjetos();
}

function modificarObjeto() {
  if (estado.objetoCopia === null) {
    escreverLeitura("leitura-objeto", "Primeiro execute objetoCopia = objetoOriginal.");
    return;
  }
  estado.objetoCopia.tamanho = 99;
  escreverLeitura("leitura-objeto", "objetoOriginal.tamanho agora também vale " + estado.objetoOriginal.tamanho + ": as duas variáveis apontam para o mesmo objeto.");
  renderizarObjetos();
}

function criarCopiaReal() {
  estado.copiaIndependente = { ...estado.objetoOriginal };
  escreverLeitura("leitura-objeto", "Cópia real criada: objeto novo, com o mesmo conteúdo, em outro endereço do heap.");
  renderizarObjetos();
}

function modificarIndependente() {
  if (estado.copiaIndependente === null) {
    escreverLeitura("leitura-objeto", "Primeiro crie a cópia real com o botão de espalhamento.");
    return;
  }
  estado.copiaIndependente.tamanho = 7;
  escreverLeitura("leitura-objeto", "A cópia vale 7 e objetoOriginal continua " + estado.objetoOriginal.tamanho + ": são objetos distintos.");
  renderizarObjetos();
}

function reiniciarObjeto() {
  estado.objetoOriginal = { nome: "caixa", tamanho: 40 };
  estado.objetoCopia = null;
  estado.copiaIndependente = null;
  escreverLeitura("leitura-objeto", "Experimento reiniciado: o objeto antigo, sem referências, fica elegível para a coleta de lixo.");
  renderizarObjetos();
}

// ---- Ligação dos botões ----

elemento("botao-atribuir-primitivo").addEventListener("click", atribuirPrimitivo);
elemento("botao-modificar-primitivo").addEventListener("click", modificarPrimitivo);
elemento("botao-reiniciar-primitivo").addEventListener("click", reiniciarPrimitivo);
elemento("botao-atribuir-objeto").addEventListener("click", atribuirObjeto);
elemento("botao-modificar-objeto").addEventListener("click", modificarObjeto);
elemento("botao-copia-real").addEventListener("click", criarCopiaReal);
elemento("botao-modificar-independente").addEventListener("click", modificarIndependente);
elemento("botao-reiniciar-objeto").addEventListener("click", reiniciarObjeto);

renderizarPrimitivos();
renderizarObjetos();
