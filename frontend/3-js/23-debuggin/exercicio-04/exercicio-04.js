/*
    Exercício 04 - Debugging Performance
    Medir antes de otimizar. Os três exemplos: tempo de execução,
    refluxo de layout e comparação entre formas de animar.
    Todos os testes são rápidos e controlados.
*/

// ---------- Exemplo 1: medindo o tempo de execução ----------

const QUANTIDADE_DE_NOMES = 4000;
const listaDeNomes = [];

for (let indice = 0; indice < QUANTIDADE_DE_NOMES; indice++) {
    // 120 nomes diferentes se revezam na lista, criando repetições.
    listaDeNomes.push("nome-" + (indice % 120));
}

const campoTempoLento = document.getElementById("tempo-versao-lenta");
const campoTempoRapido = document.getElementById("tempo-versao-rapida");
const campoDiferenca = document.getElementById("diferenca-de-tempos");

let tempoMedidoLento = null;
let tempoMedidoRapido = null;

function contarOcorrenciasPercorrendoTudo() {
    const contagemDosNomes = {};

    // Caminho caro: para cada nome, a lista inteira é percorrida
    // novamente para contar as repetições.
    for (let indice = 0; indice < listaDeNomes.length; indice++) {
        const nomeAtual = listaDeNomes[indice];
        let repeticoesDoNome = 0;

        for (let indiceDeBusca = 0; indiceDeBusca < listaDeNomes.length; indiceDeBusca++) {
            if (listaDeNomes[indiceDeBusca] === nomeAtual) {
                repeticoesDoNome = repeticoesDoNome + 1;
            }
        }

        contagemDosNomes[nomeAtual] = repeticoesDoNome;
    }

    return contagemDosNomes;
}

function contarOcorrenciasNumaUnicaPassada() {
    const contagemDosNomes = {};

    // Caminho barato: uma passada só, acumulando as contagens no objeto.
    for (let indice = 0; indice < listaDeNomes.length; indice++) {
        const nomeAtual = listaDeNomes[indice];
        contagemDosNomes[nomeAtual] = (contagemDosNomes[nomeAtual] || 0) + 1;
    }

    return contagemDosNomes;
}

function medirExecucaoEmMilissegundos(funcaoASerMedida, rotuloDaMedida) {
    // console.time e console.timeEnd registram a mesma medida no Console.
    console.time(rotuloDaMedida);

    const momentoInicial = performance.now();
    funcaoASerMedida();
    const momentoFinal = performance.now();

    console.timeEnd(rotuloDaMedida);
    return momentoFinal - momentoInicial;
}

function executarContagemLenta() {
    tempoMedidoLento = medirExecucaoEmMilissegundos(contarOcorrenciasPercorrendoTudo, "contagem lenta");
    campoTempoLento.textContent = tempoMedidoLento.toFixed(2) + " ms";
    atualizarDiferencaDeTempos();
}

function executarContagemRapida() {
    tempoMedidoRapido = medirExecucaoEmMilissegundos(contarOcorrenciasNumaUnicaPassada, "contagem rápida");
    campoTempoRapido.textContent = tempoMedidoRapido.toFixed(2) + " ms";
    atualizarDiferencaDeTempos();
}

function atualizarDiferencaDeTempos() {
    if (tempoMedidoLento === null || tempoMedidoRapido === null) {
        return;
    }

    campoDiferenca.textContent = (tempoMedidoLento - tempoMedidoRapido).toFixed(2) + " ms";
}

document.getElementById("botao-contar-lenta").addEventListener("click", executarContagemLenta);
document.getElementById("botao-contar-rapida").addEventListener("click", executarContagemRapida);

// ---------- Exemplo 2: refluxo de layout ----------

const QUANTIDADE_DE_CAIXAS = 200;
const areaDasCaixas = document.getElementById("area-caixas");

for (let indice = 0; indice < QUANTIDADE_DE_CAIXAS; indice++) {
    const caixaDePintura = document.createElement("div");
    caixaDePintura.classList.add("caixa-pintura");
    caixaDePintura.style.height = "24px";
    areaDasCaixas.appendChild(caixaDePintura);
}

function trocarAlturasMisturandoLeituraEEscrita() {
    const caixasDePintura = document.querySelectorAll(".caixa-pintura");

    for (let indice = 0; indice < caixasDePintura.length; indice++) {
        // Depois da primeira escrita de altura, cada nova leitura de
        // offsetHeight obriga o navegador a recalcular o layout na hora.
        const alturaLida = caixasDePintura[indice].offsetHeight;
        caixasDePintura[indice].style.height = alturaLida === 24 ? "48px" : "24px";
    }
}

function trocarAlturasSeparandoLeituraDaEscrita() {
    const caixasDePintura = document.querySelectorAll(".caixa-pintura");
    const alturasLidas = [];

    // Todas as leituras primeiro: o layout é recalculado poucas vezes.
    for (let indice = 0; indice < caixasDePintura.length; indice++) {
        alturasLidas.push(caixasDePintura[indice].offsetHeight);
    }

    // Todas as escritas depois.
    for (let indice = 0; indice < caixasDePintura.length; indice++) {
        caixasDePintura[indice].style.height = alturasLidas[indice] === 24 ? "48px" : "24px";
    }
}

function executarTrocaEMedir(funcaoDeTroca, identificadorDoCampo) {
    const momentoInicial = performance.now();
    funcaoDeTroca();
    const momentoFinal = performance.now();

    const tempoDecorrido = momentoFinal - momentoInicial;
    document.getElementById(identificadorDoCampo).textContent = tempoDecorrido.toFixed(2) + " ms";
}

function pintarBarrasMisturando() {
    executarTrocaEMedir(trocarAlturasMisturandoLeituraEEscrita, "tempo-misturado");
}

function pintarBarrasSeparando() {
    executarTrocaEMedir(trocarAlturasSeparandoLeituraDaEscrita, "tempo-separado");
}

document.getElementById("botao-pintar-misturado").addEventListener("click", pintarBarrasMisturando);
document.getElementById("botao-pintar-separado").addEventListener("click", pintarBarrasSeparando);

// ---------- Exemplo 3: animação com rAF e setInterval ----------

const barraDoTemporizador = document.getElementById("barra-temporizador");
const barraDoQuadro = document.getElementById("barra-quadro");
const contadorDoTemporizador = document.getElementById("contador-temporizador");
const contadorDoQuadro = document.getElementById("contador-quadro");

let identificacaoDoTemporizador = null;
let identificacaoDoQuadro = null;
let posicaoDaBarraTemporizador = 0;
let posicaoDaBarraQuadro = 0;
let atualizacoesDoTemporizador = 0;
let atualizacoesDoQuadro = 0;

function moverBarraDoTemporizador() {
    // O limite 88 mantém a barra dentro do trilho, que tem 100 de largura.
    posicaoDaBarraTemporizador = (posicaoDaBarraTemporizador + 1) % 88;
    atualizacoesDoTemporizador = atualizacoesDoTemporizador + 1;

    barraDoTemporizador.style.left = posicaoDaBarraTemporizador + "%";
    contadorDoTemporizador.textContent = atualizacoesDoTemporizador;
}

function moverBarraDoQuadro() {
    posicaoDaBarraQuadro = (posicaoDaBarraQuadro + 1) % 88;
    atualizacoesDoQuadro = atualizacoesDoQuadro + 1;

    barraDoQuadro.style.left = posicaoDaBarraQuadro + "%";
    contadorDoQuadro.textContent = atualizacoesDoQuadro;

    // requestAnimationFrame agenda a próxima atualização para o momento
    // em que o navegador for desenhar o próximo quadro da tela.
    identificacaoDoQuadro = requestAnimationFrame(moverBarraDoQuadro);
}

function iniciarAnimacoes() {
    if (identificacaoDoTemporizador === null) {
        identificacaoDoTemporizador = setInterval(moverBarraDoTemporizador, 16);
    }

    if (identificacaoDoQuadro === null) {
        identificacaoDoQuadro = requestAnimationFrame(moverBarraDoQuadro);
    }
}

function pararAnimacoes() {
    if (identificacaoDoTemporizador !== null) {
        clearInterval(identificacaoDoTemporizador);
        identificacaoDoTemporizador = null;
    }

    if (identificacaoDoQuadro !== null) {
        cancelAnimationFrame(identificacaoDoQuadro);
        identificacaoDoQuadro = null;
    }
}

document.getElementById("botao-iniciar-animacoes").addEventListener("click", iniciarAnimacoes);
document.getElementById("botao-parar-animacoes").addEventListener("click", pararAnimacoes);
