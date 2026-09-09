/*
  O que é:
  Prevenção de vazamentos: padrões simples que evitam reter memória
  sem necessidade, como caches com limite, estruturas fracas e o par
  addEventListener/removeEventListener com função nomeada.

  Para que serve:
  Transforma o que os exercícios anteriores mostraram em hábito de
  código: quem cria uma referência também planeja o fim dela.

  Como funciona:
  A prática 1 mantém um cache de imagens simuladas em três
  estratégias: Map sem limite, Map com limite de cinco itens e
  WeakMap. A prática 2 instala e remove uma escuta do documento
  usando a mesma função nomeada, única forma de remoção possível.

  Quando usar:
  Sempre que houver criação e destruição repetidas de objetos,
  caches, escutas e blocos grandes de dados de vida curta.

  Quando não usar:
  Não trate todo código como suspeito: escopos bem fechados já
  resolvem a maior parte dos casos. Estes padrões entram quando o
  tempo de vida de quem escuta difere do de quem é escutado ou
  quando um cache pode crescer sem controle.
*/

const LIMITE_CACHE = 5;
const PESO_KB = 300;

let estrategiaAtual = "sem-limite";
let cache = new Map();
let cacheFraco = new WeakMap();
let imagensAtivas = [];
let observadas = [];
let carregadas = 0;
const suportaWeakRef = typeof WeakRef === "function";

// ---- Prática 1: cache com controle de retenção ----

function elemento(id) {
  return document.getElementById(id);
}

function carregarImagem() {
  if (estrategiaAtual === "fraco" && !suportaWeakRef) {
    elemento("diagnostico").textContent = "este navegador não possui WeakRef; escolha outra estratégia.";
    return;
  }
  carregadas += 1;
  const imagem = {
    identificador: "imagem-" + carregadas,
    pesoKB: PESO_KB,
    conteudo: new Array(1500).fill(0)
  };
  imagensAtivas.push(imagem);
  if (estrategiaAtual === "fraco") {
    cacheFraco.set(imagem, { criadaEm: carregadas });
    observadas.push({ identificador: imagem.identificador, ref: new WeakRef(imagem) });
  } else {
    cache.set(imagem, { criadaEm: carregadas });
    // O Map guarda a ordem de inserção: a primeira chave é o item mais antigo.
    while (cache.size > LIMITE_CACHE) {
      const maisAntiga = cache.keys().next().value;
      cache.delete(maisAntiga);
    }
  }
  elemento("diagnostico").textContent = "";
  renderizar();
}

function descartarImagem() {
  if (imagensAtivas.length === 0) {
    elemento("diagnostico").textContent = "não há imagens em uso para descartar.";
    return;
  }
  const descartada = imagensAtivas.pop();
  if (estrategiaAtual === "sem-limite") {
    elemento("diagnostico").textContent = descartada.identificador + " saiu de uso, mas o Map sem limite retém os " + PESO_KB + " KB dela.";
  } else if (estrategiaAtual === "com-limite") {
    elemento("diagnostico").textContent = descartada.identificador + " saiu de uso; o cache retém no máximo " + LIMITE_CACHE + " itens, mantendo o teto sob controle.";
  } else {
    elemento("diagnostico").textContent = descartada.identificador + " saiu de uso; o WeakMap não impede a coleta, verifique o cache para conferir.";
  }
  renderizar();
}

function verificarCache() {
  renderizar();
  if (estrategiaAtual === "fraco") {
    elemento("diagnostico").textContent = "o navegador decide quando coletar: itens marcados como coletadas já foram liberados; os demais aguardam.";
  } else if (estrategiaAtual === "com-limite") {
    elemento("diagnostico").textContent = "estratégia com limite: no máximo " + LIMITE_CACHE + " itens retidos, teto de " + (LIMITE_CACHE * PESO_KB) + " KB.";
  } else {
    let descartadas = 0;
    cache.forEach(function (valor, chave) {
      if (imagensAtivas.indexOf(chave) === -1) {
        descartadas += 1;
      }
    });
    if (descartadas > 0) {
      elemento("diagnostico").textContent = descartadas + " imagem(ns) descartada(s) continua(m) presa(s) no Map: cache sem limite é vazamento adiado.";
    } else {
      elemento("diagnostico").textContent = "nenhuma imagem descartada retida ainda; carregue e descarte algumas para observar.";
    }
  }
}

function adicionarItemCache(lista, identificador, situacao, classe) {
  const linha = document.createElement("li");
  const nome = document.createElement("span");
  nome.textContent = identificador;
  const estadoDoItem = document.createElement("span");
  estadoDoItem.className = classe;
  estadoDoItem.textContent = situacao;
  linha.appendChild(nome);
  linha.appendChild(estadoDoItem);
  lista.appendChild(linha);
}

function renderizar() {
  const lista = elemento("lista-cache");
  lista.textContent = "";
  let retidas = 0;
  let peso = 0;

  if (estrategiaAtual === "fraco") {
    observadas.forEach(function (item) {
      const alvo = item.ref.deref();
      if (alvo === undefined) {
        adicionarItemCache(lista, item.identificador, "coletada: a entrada do cache sumiu junto", "situacao-coletada");
      } else if (imagensAtivas.indexOf(alvo) !== -1) {
        retidas += 1;
        peso += PESO_KB;
        adicionarItemCache(lista, item.identificador, "em uso (referência forte legítima)", "situacao-em-uso");
      } else {
        retidas += 1;
        peso += PESO_KB;
        adicionarItemCache(lista, item.identificador, "viva, aguardando coleta (só referência fraca)", "situacao-coletada");
      }
    });
  } else {
    cache.forEach(function (valor, chave) {
      retidas += 1;
      peso += PESO_KB;
      if (imagensAtivas.indexOf(chave) !== -1) {
        adicionarItemCache(lista, chave.identificador, "em uso (referência forte legítima)", "situacao-em-uso");
      } else {
        adicionarItemCache(lista, chave.identificador, "retida pelo cache mesmo descartada", "situacao-retida");
      }
    });
  }

  elemento("valor-carregadas").textContent = String(carregadas);
  elemento("valor-retidas").textContent = String(retidas);
  elemento("valor-peso").textContent = peso + " KB";
}

function rotuloEstrategia() {
  if (estrategiaAtual === "sem-limite") {
    return "Map sem limite";
  }
  if (estrategiaAtual === "com-limite") {
    return "Map com limite";
  }
  return "WeakMap";
}

function reiniciarEstruturas() {
  cache = new Map();
  cacheFraco = new WeakMap();
  observadas = [];
  imagensAtivas = [];
  carregadas = 0;
  renderizar();
}

function reiniciarEstudo() {
  reiniciarEstruturas();
  elemento("diagnostico").textContent = "estudo reiniciado com a estratégia " + rotuloEstrategia() + ".";
}

// Troca de estratégia: o cache precisa começar do zero para a comparação ser justa.
document.querySelectorAll("input[name=estrategia]").forEach(function (entrada) {
  entrada.addEventListener("change", function () {
    estrategiaAtual = entrada.value;
    reiniciarEstruturas();
    elemento("diagnostico").textContent = "estratégia alterada para " + rotuloEstrategia() + "; cache reiniciado.";
  });
});

// ---- Prática 2: escutas que podem ser removidas ----

let escutaInstalada = false;
let cliquesCapturados = 0;

// Função nomeada e guardada: só assim o removeEventListener encontra a escuta.
function aoClicarNoDocumento() {
  cliquesCapturados += 1;
  elemento("mensagem-escuta").textContent = "cliques capturados desde a instalação: " + cliquesCapturados;
}

function instalarEscuta() {
  if (escutaInstalada) {
    elemento("mensagem-escuta").textContent = "a escuta já está instalada.";
    return;
  }
  document.addEventListener("click", aoClicarNoDocumento);
  escutaInstalada = true;
  elemento("valor-escuta").textContent = "ligada";
  elemento("mensagem-escuta").textContent = "instalada: clique em qualquer ponto da página para ver a função sendo chamada.";
}

function removerEscuta() {
  if (!escutaInstalada) {
    elemento("mensagem-escuta").textContent = "não há escuta instalada para remover.";
    return;
  }
  document.removeEventListener("click", aoClicarNoDocumento);
  escutaInstalada = false;
  elemento("valor-escuta").textContent = "desligada";
  elemento("mensagem-escuta").textContent = "removida: a referência no document foi desfeita e a função pode ser coletada.";
}

elemento("botao-carregar").addEventListener("click", carregarImagem);
elemento("botao-descartar").addEventListener("click", descartarImagem);
elemento("botao-verificar").addEventListener("click", verificarCache);
elemento("botao-reiniciar").addEventListener("click", reiniciarEstudo);
elemento("botao-escutar").addEventListener("click", instalarEscuta);
elemento("botao-parar").addEventListener("click", removerEscuta);

renderizar();
