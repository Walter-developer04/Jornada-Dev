/*
  O que é:
  Simulação do ciclo de vida de objetos no heap e do critério que o
  coletor de lixo usa para liberá-los: o alcance (reachability).

  Para que serve:
  Mostrar que liberar memória não depende de apagar o objeto, e sim
  de soltar todas as referências que levam até ele. Sem nenhum
  caminho a partir das raízes, o objeto vira lixo elegível.

  Como funciona:
  A raiz simula variáveis globais; a referência temporária simula
  uma variável local em uso. Ao executar a coleta, o algoritmo
  marca o que é alcançável e varre o heap removendo o que ficou
  sem marca: é a marcação e varredura (mark and sweep).

  Quando usar:
  Sempre que for preciso decidir se um dado ainda é necessário:
  manter a referência significa manter o objeto vivo.

  Quando não usar:
  Não existe chamada manual de coleta em produção: o navegador
  decide o momento. Use este estudo para raciocinar sobre alcance,
  não para tentar controlar o coletor.
*/

const heap = {};             // memória monitorada: identificador -> objeto
const raiz = { pilha: [] };  // raiz de alcance (simula variável global)
let temporaria = null;       // referência local em uso (simula a pilha de execução)
let sequencia = 0;

function elemento(id) {
  return document.getElementById(id);
}

// Cria um objeto no heap e o prende à referência temporária.
function alocarObjeto() {
  if (temporaria !== null) {
    registrarLog("[aloc] a referência temporária anterior foi substituída; o alvo dela ficou sem apoio");
  }
  sequencia += 1;
  const objeto = {
    identificador: "obj-" + sequencia,
    tamanhoKB: 16 + Math.floor(Math.random() * 80),
    criadoEm: sequencia
  };
  heap[objeto.identificador] = objeto;
  temporaria = objeto;
  registrarLog("[aloc] " + objeto.identificador + " criado com " + objeto.tamanhoKB + " KB e preso à referência temporária");
  renderizar();
}

// Transfere a referência temporária para a raiz (variável global simulada).
function guardarNaRaiz() {
  if (temporaria === null) {
    registrarLog("[raiz] nada para guardar: aloque um objeto primeiro");
    return;
  }
  raiz.pilha.push(temporaria);
  registrarLog("[raiz] " + temporaria.identificador + " guardado em raiz.pilha; a temporária foi devolvida");
  temporaria = null;
  renderizar();
}

// Anula a referência temporária: o alvo fica sem apoio, se mais ninguém o segura.
function soltarTemporaria() {
  if (temporaria === null) {
    registrarLog("[solt] a referência temporária já está vazia");
    return;
  }
  registrarLog("[solt] referência para " + temporaria.identificador + " anulada; ele segue no heap, porém sem apoio");
  temporaria = null;
  renderizar();
}

function removerUltimoDaRaiz() {
  if (raiz.pilha.length === 0) {
    registrarLog("[raiz] a pilha da raiz já está vazia");
    return;
  }
  const descartado = raiz.pilha.pop();
  registrarLog("[solt] " + descartado.identificador + " saiu da raiz; se ninguém mais o segura, virou lixo elegível");
  renderizar();
}

// Marca tudo alcançável a partir das raízes.
function calcularAlcance() {
  const marcados = {};
  // Um coletor real percorre toda a cadeia de referências.
  // Aqui o grafo é raso: a raiz e a temporária bastam.
  if (temporaria !== null) {
    marcados[temporaria.identificador] = true;
  }
  raiz.pilha.forEach(function (objeto) {
    marcados[objeto.identificador] = true;
  });
  return marcados;
}

// Marcação e varredura: remove do heap tudo que ficou inalcançável.
function executarColetor() {
  const marcados = calcularAlcance();
  const liberados = [];
  let totalKB = 0;
  Object.keys(heap).forEach(function (identificador) {
    if (!marcados[identificador]) {
      totalKB += heap[identificador].tamanhoKB;
      liberados.push(identificador);
      delete heap[identificador];
    }
  });
  if (liberados.length === 0) {
    registrarLog("[gc] varredura concluída: nada para liberar, todos os objetos são alcançáveis");
  } else {
    registrarLog("[gc] varredura concluída: liberados " + liberados.join(", ") + " (" + totalKB + " KB devolvidos)");
  }
  renderizar();
}

function reiniciar() {
  Object.keys(heap).forEach(function (identificador) {
    delete heap[identificador];
  });
  raiz.pilha = [];
  temporaria = null;
  sequencia = 0;
  elemento("lista-log").textContent = "";
  registrarLog("[sys] simulação reiniciada");
  renderizar();
}

function registrarLog(texto) {
  const lista = elemento("lista-log");
  const item = document.createElement("li");
  item.textContent = texto;
  lista.appendChild(item);
  lista.scrollTop = lista.scrollHeight;
}

function renderizar() {
  const alcance = calcularAlcance();

  const blocoRaiz = elemento("bloco-raiz");
  blocoRaiz.textContent = "";
  const linhaRaiz = document.createElement("p");
  const nomes = raiz.pilha.map(function (objeto) {
    return objeto.identificador;
  });
  linhaRaiz.textContent = "raiz.pilha = [" + nomes.join(", ") + "]";
  blocoRaiz.appendChild(linhaRaiz);
  const linhaTemp = document.createElement("p");
  linhaTemp.textContent = "temporaria = " + (temporaria === null ? "null" : temporaria.identificador);
  blocoRaiz.appendChild(linhaTemp);

  const area = elemento("area-objetos");
  area.textContent = "";
  let totalObjetos = 0;
  let totalKB = 0;
  let perdidosKB = 0;

  Object.keys(heap).forEach(function (identificador) {
    const objeto = heap[identificador];
    totalObjetos += 1;
    totalKB += objeto.tamanhoKB;
    const alcancavel = alcance[identificador] === true;
    if (!alcancavel) {
      perdidosKB += objeto.tamanhoKB;
    }
    const cartao = document.createElement("div");
    cartao.className = "cartao-objeto " + (alcancavel ? "alcancavel" : "inalcancavel");
    const nome = document.createElement("p");
    nome.className = "identidade";
    nome.textContent = objeto.identificador;
    const detalhe = document.createElement("p");
    detalhe.className = "detalhe";
    detalhe.textContent = objeto.tamanhoKB + " KB | " + (alcancavel ? "alcançável" : "inalcançável");
    cartao.appendChild(nome);
    cartao.appendChild(detalhe);
    area.appendChild(cartao);
  });

  if (totalObjetos === 0) {
    const aviso = document.createElement("p");
    aviso.className = "detalhe";
    aviso.textContent = "heap vazio: aloque objetos para observar o ciclo de vida";
    area.appendChild(aviso);
  }

  elemento("resumo-memoria").textContent = "objetos: " + totalObjetos + " | peso total: " + totalKB + " KB | peso inalcançável: " + perdidosKB + " KB";
}

elemento("botao-alocar").addEventListener("click", alocarObjeto);
elemento("botao-guardar").addEventListener("click", guardarNaRaiz);
elemento("botao-soltar").addEventListener("click", soltarTemporaria);
elemento("botao-remover").addEventListener("click", removerUltimoDaRaiz);
elemento("botao-coletar").addEventListener("click", executarColetor);
elemento("botao-reiniciar").addEventListener("click", reiniciar);

registrarLog("[sys] simulador pronto: aloque, guarde na raiz, solte referências e colete");
renderizar();
