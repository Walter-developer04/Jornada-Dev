/*
  O que é:
  Vazamento de memória: memória que o programa não usa mais, mas
  que continua retida porque uma referência esquecida segue
  apontando para ela.

  Para que serve:
  Serve para reconhecer os padrões clássicos de retenção: escutas
  registradas em objetos longevos (window e document), closures
  que capturam dados grandes e elementos destacados do DOM que
  continuam presos por funções ainda vivas.

  Como funciona:
  Painéis descuidados instalam uma escuta de resize no window; a
  escuta captura o painel e um bloco simulado de dados. Destruir o
  painel tira o elemento da tela, mas a escuta esquecida mantém
  tudo vivo no heap. Painéis cuidadosos escutam a si mesmos: ao
  sair do documento e perder as referências, podem ser coletados.

  Quando usar:
  Use este raciocínio sempre que criar e destruir elementos com
  frequência (listas, abas, notificações) e sempre que instalar
  escutas em objetos que vivem a página inteira.

  Quando não usar:
  Escuta permanente em elemento permanente não é vazamento; remover
  escutas à toa também custa processamento. Compare o tempo de
  vida de quem escuta com o de quem é escutado antes de decidir.
*/

let paineisAtivos = [];
let vazamentos = [];
let sequencia = 0;
const PESO_KB = 500;

function elemento(id) {
  return document.getElementById(id);
}

// Painel que instala a escuta no window: nasce o risco de vazamento.
function criarPainelDescuidado() {
  sequencia += 1;
  const nome = "painel-" + sequencia;
  const painel = document.createElement("div");
  painel.className = "painel-cena";
  const titulo = document.createElement("p");
  titulo.textContent = nome + " (descuidado)";
  const texto = document.createElement("p");
  texto.textContent = "enquanto o palco me mantiver, sou memória legítima";
  painel.appendChild(titulo);
  painel.appendChild(texto);
  elemento("area-paineis").appendChild(painel);

  // Bloco grande simulado: será capturado pela closure da escuta.
  const dadosGrandes = new Array(20000).fill("x");

  // A escuta vive no window (objeto longevo) e captura painel e dados.
  function aoRedimensionarJanela() {
    painel.dataset.toques = String(Number(painel.dataset.toques || 0) + 1);
  }
  window.addEventListener("resize", aoRedimensionarJanela);

  paineisAtivos.push({
    nome: nome,
    painel: painel,
    tipo: "descuidado",
    removerEscuta: function () {
      window.removeEventListener("resize", aoRedimensionarJanela);
    }
  });
  elemento("explicacao-medidor").textContent = nome + " criado: a escuta de resize no window já captura este painel e " + PESO_KB + " KB de dados.";
  atualizarMedidor();
}

// Painel que escuta a si mesmo: pode morrer junto com o elemento.
function criarPainelCuidadoso() {
  sequencia += 1;
  const nome = "painel-" + sequencia;
  const painel = document.createElement("div");
  painel.className = "painel-cena";
  const titulo = document.createElement("p");
  titulo.textContent = nome + " (cuidadoso)";
  const texto = document.createElement("p");
  texto.textContent = "clique em mim: minha escuta vive em mim mesmo";
  painel.appendChild(titulo);
  painel.appendChild(texto);
  elemento("area-paineis").appendChild(painel);

  const dadosGrandes = new Array(20000).fill("x");

  // Escuta anexada ao próprio elemento: não cria corrente com o window.
  painel.addEventListener("click", function () {
    texto.textContent = "clique registrado com " + dadosGrandes.length + " itens capturados pela closure local";
  });

  paineisAtivos.push({ nome: nome, painel: painel, tipo: "cuidadoso" });
  elemento("explicacao-medidor").textContent = nome + " criado: a escuta pertence ao elemento, então destruir o painel liberta a memória.";
  atualizarMedidor();
}

function destruirTodosPaineis() {
  if (paineisAtivos.length === 0) {
    elemento("explicacao-medidor").textContent = "não há painéis para destruir.";
    return;
  }
  let descuidados = 0;
  let cuidadosos = 0;
  paineisAtivos.forEach(function (item) {
    elemento("area-paineis").removeChild(item.painel);
    if (item.tipo === "descuidado") {
      descuidados += 1;
      // No navegador real, quem retém é a escuta esquecida no window.
      // Aqui também registramos no array para medir e inspecionar.
      vazamentos.push(item);
    } else {
      cuidadosos += 1;
    }
  });
  paineisAtivos = [];
  elemento("explicacao-medidor").textContent = descuidados + " painel(is) descuidado(s) destruído(s) na tela, porém retido(s) na memória. " + cuidadosos + " painel(is) cuidadoso(s) liberado(s) de verdade.";
  atualizarMedidor();
}

function inspecionarRetencao() {
  const lista = elemento("lista-retencao");
  lista.textContent = "";
  if (vazamentos.length === 0) {
    elemento("explicacao-autopsia").textContent = "nenhuma retenção encontrada: nada foi mantido vivo depois da destruição.";
    return;
  }
  elemento("explicacao-autopsia").textContent = "cadeias que mantêm a memória viva (leia da esquerda para a direita):";
  vazamentos.forEach(function (item) {
    const linha = document.createElement("li");
    const nome = document.createElement("p");
    nome.textContent = item.nome + " | " + PESO_KB + " KB retidos";
    const cadeia = document.createElement("p");
    cadeia.className = "cadeia";
    cadeia.textContent = "window → escuta de resize → closure captura o painel destacado e os dados grandes → o coletor não pode liberar nada disso";
    linha.appendChild(nome);
    linha.appendChild(cadeia);
    lista.appendChild(linha);
  });
}

function atualizarMedidor() {
  const total = vazamentos.length * PESO_KB;
  elemento("valor-retido").textContent = total + " KB";
  elemento("barra-retida").style.width = Math.min(100, vazamentos.length * 10) + "%";
}

function reiniciarTudo() {
  // Remove as escutas esquecidas antes de apagar os registros,
  // devolvendo a memória de fato ao sistema.
  vazamentos.forEach(function (item) {
    item.removerEscuta();
  });
  paineisAtivos.forEach(function (item) {
    if (item.tipo === "descuidado") {
      item.removerEscuta();
    }
  });
  vazamentos = [];
  paineisAtivos = [];
  sequencia = 0;
  elemento("area-paineis").textContent = "";
  elemento("lista-retencao").textContent = "";
  elemento("explicacao-autopsia").textContent = "Clique em inspecionar retenção depois de destruir painéis descuidados. A cadeia explicará por que cada objeto continua vivo.";
  elemento("explicacao-medidor").textContent = "tudo limpo: escutas removidas do window e referências anuladas.";
  atualizarMedidor();
}

elemento("botao-criar-descuidado").addEventListener("click", criarPainelDescuidado);
elemento("botao-criar-cuidadoso").addEventListener("click", criarPainelCuidadoso);
elemento("botao-destruir").addEventListener("click", destruirTodosPaineis);
elemento("botao-inspecionar").addEventListener("click", inspecionarRetencao);
elemento("botao-reiniciar").addEventListener("click", reiniciarTudo);

atualizarMedidor();
