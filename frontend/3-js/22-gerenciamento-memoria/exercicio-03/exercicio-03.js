/*
  O que é:
  Referências fracas: laços que apontam para um objeto sem impedir
  a coleta dele. WeakMap e WeakSet aceitam apenas objetos como
  chaves e mantêm cada entrada viva apenas enquanto a chave viver.
  WeakRef permite perguntar, depois, se o objeto ainda existe.

  Para que serve:
  Serve para ligar metadados, caches e marcações a objetos sem que
  essa ligação vire uma corrente prendendo o objeto na memória.

  Como funciona:
  Cada objeto criado é registrado em três lugares: uma lista
  (referência forte), um Map (referência forte) e um WeakMap
  (referência fraca), além de ser observado por um WeakRef.
  Ao soltar a lista, o Map continua segurando os objetos; o
  WeakMap, não. A verificação usa o WeakRef para descobrir quem
  ainda vive e por quê.

  Quando usar:
  Metadados ligados a alvos de vida curta: cache por objeto,
  marcações temporárias, resultados associados a uma instância
  que pode sumir a qualquer momento.

  Quando não usar:
  Quando você precisa garantir que o dado exista (agenda,
  cadastro, configuração): referência fraca deixa o objeto sumir
  sem aviso. Também não serve como lista consultável: WeakMap não
  é enumerável e não possui size.
*/

let listaObjetos = [];
const mapaForte = new Map();
let mapaFraco = new WeakMap();
let observados = [];
let sequencia = 0;
const suportaWeakRef = typeof WeakRef === "function";

// FinalizationRegistry avisa (quando o navegador quiser) que um objeto foi coletado.
let registroFinalizacao = null;
if (typeof FinalizationRegistry === "function") {
  registroFinalizacao = new FinalizationRegistry(function (identificador) {
    registrarAviso("aviso do navegador: " + identificador + " foi liberado pelo coletor de lixo");
  });
}

function elemento(id) {
  return document.getElementById(id);
}

function criarObjeto() {
  sequencia += 1;
  const objeto = {
    identificador: "obj-" + sequencia,
    conteudo: new Array(2000).fill(0)
  };
  listaObjetos.push(objeto);
  mapaForte.set(objeto, { rotulo: "meta-" + sequencia });
  mapaFraco.set(objeto, { rotulo: "meta-" + sequencia });
  observados.push({
    identificador: objeto.identificador,
    ref: suportaWeakRef ? new WeakRef(objeto) : null
  });
  if (registroFinalizacao) {
    registroFinalizacao.register(objeto, objeto.identificador);
  }
  registrarAviso("obj-" + sequencia + " criado e registrado na lista, no Map e no WeakMap");
  renderizar();
}

function soltarReferenciasFortes() {
  if (listaObjetos.length === 0) {
    registrarAviso("não há referências fortes na lista para soltar");
    return;
  }
  const quantidade = listaObjetos.length;
  listaObjetos = [];
  registrarAviso("as " + quantidade + " referências da lista foram anuladas; o Map, porém, ainda segura os objetos");
  renderizar();
}

function esvaziarMapaForte() {
  if (mapaForte.size === 0) {
    registrarAviso("o Map forte já está vazio");
    return;
  }
  mapaForte.clear();
  registrarAviso("Map forte esvaziado: agora os objetos dependem apenas do coletor para serem liberados");
  renderizar();
}

function verificarEstado() {
  if (!suportaWeakRef) {
    registrarAviso("este navegador não possui WeakRef; a verificação individual não é possível");
    renderizar();
    return;
  }
  let vivos = 0;
  let coletados = 0;
  observados.forEach(function (item) {
    if (item.ref.deref() === undefined) {
      coletados += 1;
    } else {
      vivos += 1;
    }
  });
  registrarAviso("verificação: " + vivos + " vivos e " + coletados + " coletados entre os objetos observados");
  renderizar();
}

function listaContem(objeto) {
  return listaObjetos.some(function (item) {
    return item === objeto;
  });
}

// Classifica um objeto observado: vivo ou coletado, e por quem ele é segurado.
function classificar(item) {
  if (!suportaWeakRef) {
    return { vivo: true, motivo: "verificação indisponível sem WeakRef" };
  }
  const alvo = item.ref.deref();
  if (alvo === undefined) {
    return { vivo: false, motivo: "coletado: o WeakMap soltou a entrada junto com a chave" };
  }
  if (listaContem(alvo)) {
    return { vivo: true, motivo: "vivo: segurado pela lista de referências fortes" };
  }
  if (mapaForte.has(alvo)) {
    return { vivo: true, motivo: "vivo: preso pelo Map forte, que impede a coleta" };
  }
  return { vivo: true, motivo: "vivo: só resta referência fraca, aguardando o coletor" };
}

function renderizar() {
  const lista = elemento("lista-observados");
  lista.textContent = "";
  let vivos = 0;
  observados.forEach(function (item) {
    const info = classificar(item);
    if (info.vivo) {
      vivos += 1;
    }
    const linha = document.createElement("li");
    const nome = document.createElement("span");
    nome.textContent = item.identificador;
    const estadoDoItem = document.createElement("span");
    estadoDoItem.className = "estado " + (info.vivo ? "viva" : "morta");
    estadoDoItem.textContent = info.motivo;
    linha.appendChild(nome);
    linha.appendChild(estadoDoItem);
    lista.appendChild(linha);
  });
  if (observados.length === 0) {
    const vazio = document.createElement("li");
    vazio.textContent = "nenhum objeto observado ainda";
    lista.appendChild(vazio);
  }
  elemento("medida-map").textContent = String(mapaForte.size);
  elemento("nota-map").textContent = "chaves retidas com força: o size só cai se você remover as chaves manualmente";
  elemento("medida-weak").textContent = suportaWeakRef ? "sem size" : "indisponível";
  elemento("nota-weak").textContent = "não enumerável; estimativa por WeakRef: " + vivos + " vivos e " + (observados.length - vivos) + " coletados";
}

function registrarAviso(texto) {
  const lista = elemento("lista-eventos");
  if (lista === null) {
    return;
  }
  const item = document.createElement("li");
  item.textContent = texto;
  lista.appendChild(item);
}

function reiniciar() {
  listaObjetos = [];
  mapaForte.clear();
  mapaFraco = new WeakMap();
  observados = [];
  sequencia = 0;
  elemento("lista-eventos").textContent = "";
  registrarAviso("estudo reiniciado");
  renderizar();
}

elemento("botao-criar").addEventListener("click", criarObjeto);
elemento("botao-soltar").addEventListener("click", soltarReferenciasFortes);
elemento("botao-esvaziar").addEventListener("click", esvaziarMapaForte);
elemento("botao-verificar").addEventListener("click", verificarEstado);
elemento("botao-reiniciar").addEventListener("click", reiniciar);

registrarAviso("estudo pronto: crie objetos, solte referências e compare Map com WeakMap");
renderizar();
