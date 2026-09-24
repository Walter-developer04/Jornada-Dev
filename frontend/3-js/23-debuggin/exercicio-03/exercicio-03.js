/*
    Exercício 03 - Debugging Memory Leaks
    Três causas comuns de vazamento: referências a elementos removidos,
    temporizador sem cancelamento e variável global acidental.
    Todos os exemplos são controlados e reversíveis.
    Observação: este arquivo não usa "use strict" de propósito, porque o
    Exemplo 3 depende da atribuição sem declaração para funcionar.
*/

// ---------- Exemplo 1: elementos removidos referenciados ----------

const listaDeLeituras = document.getElementById("lista-leituras");
const contadorLeiturasNaTela = document.getElementById("contador-leituras-na-tela");
const contadorReferenciasRetidas = document.getElementById("contador-referencias-retidas");

let numeroDaLeitura = 0;

// Esta lista é a causa do vazamento: elementos removidos da tela continuam
// guardados aqui e o coletor de lixo não pode liberá-los.
const leiturasRetidas = [];

function atualizarContadoresDeLeituras() {
    contadorLeiturasNaTela.textContent = listaDeLeituras.children.length;
    contadorReferenciasRetidas.textContent = leiturasRetidas.length;
}

function adicionarLeituraNaTela() {
    numeroDaLeitura = numeroDaLeitura + 1;

    const itemDeLeitura = document.createElement("li");
    itemDeLeitura.textContent = "Leitura número " + numeroDaLeitura;

    // O ouvinte pertence ao próprio elemento: se nada além dele guardar
    // referências, tudo é coletado junto depois da remoção.
    itemDeLeitura.addEventListener("click", function registrarLeituraClicada() {
        console.log("Leitura clicada:", itemDeLeitura.textContent);
    });

    listaDeLeituras.appendChild(itemDeLeitura);
    atualizarContadoresDeLeituras();
}

function removerUltimaLeitura() {
    const ultimaLeitura = listaDeLeituras.lastElementChild;

    if (ultimaLeitura === null) {
        return;
    }

    listaDeLeituras.removeChild(ultimaLeitura);

    // Aqui está o bug didático: a referência é mantida mesmo depois da
    // remoção. Em um instantâneo de memória, o elemento aparece como nó
    // desconectado enquanto estiver nesta lista.
    leiturasRetidas.push(ultimaLeitura);
    atualizarContadoresDeLeituras();
}

function liberarReferenciasRetidas() {
    // Esvaziar a lista remove as referências: o coletor de lixo passa a
    // poder liberar os elementos desconectados na próxima coleta.
    leiturasRetidas.length = 0;
    atualizarContadoresDeLeituras();
}

document.getElementById("botao-adicionar-leitura").addEventListener("click", adicionarLeituraNaTela);
document.getElementById("botao-remover-leitura").addEventListener("click", removerUltimaLeitura);
document.getElementById("botao-liberar-referencias").addEventListener("click", liberarReferenciasRetidas);

// ---------- Exemplo 2: temporizador nunca cancelado ----------

const contadorDeAmostras = document.getElementById("contador-amostras");
const indicadorDeColeta = document.getElementById("indicador-coleta");

let identificacaoDoIntervalo = null;
const historicoDeAmostras = [];

function coletarAmostra() {
    const amostraColetada = {
        momentoDaColeta: Date.now(),
        valorRegistrado: Math.random()
    };

    // Cada amostra fica guardada no histórico. Enquanto o temporizador
    // rodar, a lista cresce sem parada: um vazamento lento e contínuo.
    historicoDeAmostras.push(amostraColetada);
    contadorDeAmostras.textContent = historicoDeAmostras.length;
}

function iniciarColetaDeAmostras() {
    if (identificacaoDoIntervalo !== null) {
        console.warn("A coleta já está em andamento.");
        return;
    }

    identificacaoDoIntervalo = setInterval(coletarAmostra, 200);
    indicadorDeColeta.textContent = "sim";
}

function pararColetaDeAmostras() {
    if (identificacaoDoIntervalo === null) {
        return;
    }

    // clearInterval é essencial: sem ele, a função continua rodando e
    // mantendo o histórico vivo na memória indefinidamente.
    clearInterval(identificacaoDoIntervalo);
    identificacaoDoIntervalo = null;
    indicadorDeColeta.textContent = "não";
}

function liberarHistoricoDeAmostras() {
    historicoDeAmostras.length = 0;
    contadorDeAmostras.textContent = "0";
}

document.getElementById("botao-iniciar-coleta").addEventListener("click", iniciarColetaDeAmostras);
document.getElementById("botao-parar-coleta").addEventListener("click", pararColetaDeAmostras);
document.getElementById("botao-liberar-historico").addEventListener("click", liberarHistoricoDeAmostras);

// ---------- Exemplo 3: variável global acidental ----------

const contadorGlobalAcidental = document.getElementById("contador-global-acidental");

function atualizarContadorGlobalAcidental() {
    const variavelExiste = window.historicoNaoDeclarado !== undefined;
    contadorGlobalAcidental.textContent = variavelExiste ? window.historicoNaoDeclarado.length : 0;
}

function registrarDadoSemDeclararVariavel() {
    // Sem let, const ou var, a atribuição abaixo cria a propriedade
    // historicoNaoDeclarado no objeto global (window). O dado deixa de ser
    // coletado enquanto a página estiver aberta.
    historicoNaoDeclarado = window.historicoNaoDeclarado || [];
    historicoNaoDeclarado.push("registro número " + (historicoNaoDeclarado.length + 1));

    atualizarContadorGlobalAcidental();
    console.log("Valor atual da global:", window.historicoNaoDeclarado);
}

function removerVariavelGlobalAcidental() {
    if (window.historicoNaoDeclarado === undefined) {
        return;
    }

    // delete remove do objeto global a propriedade criada por acidente.
    delete window.historicoNaoDeclarado;
    atualizarContadorGlobalAcidental();
}

document.getElementById("botao-registrar-sem-declarar").addEventListener("click", registrarDadoSemDeclararVariavel);
document.getElementById("botao-remover-global").addEventListener("click", removerVariavelGlobalAcidental);
