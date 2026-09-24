/*
    Exercício 01 - Using Browser DevTools
    Os três exemplos acompanham as três seções do HTML:
    1) painel Elements, 2) painel Console, 3) painel Sources.
    Abra o DevTools com F12 antes de testar os botões.
*/

// ---------- Exemplo 1: observando o painel Elements ----------

const fichaDoEstudante = document.getElementById("ficha-estudante");
const botaoAlternarDestaque = document.getElementById("botao-alternar-destaque");

// classList.toggle adiciona a classe quando ela não existe e remove quando
// existe. Com o painel Elements aberto, dá para ver o atributo class da
// ficha mudando na árvore a cada clique.
function alternarDestaqueDaFicha() {
    fichaDoEstudante.classList.toggle("ficha-destacada");

    const fichaEstaDestacada = fichaDoEstudante.classList.contains("ficha-destacada");
    console.log("Estado da ficha no Elements:", fichaEstaDestacada ? "destacada" : "normal");
}

botaoAlternarDestaque.addEventListener("click", alternarDestaqueDaFicha);

// ---------- Exemplo 2: mensagens no painel Console ----------

const notasDaTurma = [
    { nome: "Marina", nota: 8.5 },
    { nome: "Renato", nota: 7.0 },
    { nome: "Bianca", nota: 9.5 },
    { nome: "Otavio", nota: 6.5 }
];

function mostrarInformacaoNoConsole() {
    console.log("Informação: o botão de informação foi clicado.");
}

function mostrarAvisoNoConsole() {
    console.warn("Aviso: nível de aviso, exibido em amarelo no painel.");
}

function mostrarErroNoConsole() {
    console.error("Erro: nível de erro, exibido em vermelho no painel.");
}

function mostrarTabelaDeNotasNoConsole() {
    // console.table desenha uma tabela no Console, uma linha por objeto.
    console.table(notasDaTurma);
}

document.getElementById("botao-mostrar-informacao").addEventListener("click", mostrarInformacaoNoConsole);
document.getElementById("botao-mostrar-aviso").addEventListener("click", mostrarAvisoNoConsole);
document.getElementById("botao-mostrar-erro").addEventListener("click", mostrarErroNoConsole);
document.getElementById("botao-mostrar-tabela").addEventListener("click", mostrarTabelaDeNotasNoConsole);

// ---------- Exemplo 3: pausa no painel Sources ----------

const notasParaCalcularMedia = [7.5, 8.0, 9.0, 6.5];

function calcularMediaDasNotas() {
    let somaDasNotas = 0;

    // A linha abaixo pausa a execução quando o DevTools está aberto.
    // No painel Sources, a área Scope mostra as variáveis desta função,
    // como somaDasNotas e o vetor notasParaCalcularMedia.
    debugger;

    for (let indice = 0; indice < notasParaCalcularMedia.length; indice++) {
        somaDasNotas = somaDasNotas + notasParaCalcularMedia[indice];
    }

    const mediaCalculada = somaDasNotas / notasParaCalcularMedia.length;

    document.getElementById("resultado-media").textContent = "Média calculada: " + mediaCalculada.toFixed(2);
    console.log("Média final calculada:", mediaCalculada);
}

document.getElementById("botao-calcular-media").addEventListener("click", calcularMediaDasNotas);
