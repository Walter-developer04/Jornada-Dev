/*
    Exercício 02 - Debugging Issues
    Três situações de depuração: erro visível no Console, bug de lógica
    silencioso e tipos inesperados encontrados com a pausa do debugger.
    Mantenha o DevTools aberto (F12) na aba Console.
*/

// ---------- Exemplo 1: lendo a mensagem de erro ----------

const dadosDaEstudante = {
    nome: "Renata Sanches",
    curso: "Sistemas de Informação"
};

function exibirTelefoneComErro() {
    // A estudante não possui a propriedade "telefone". Chamar trim em
    // undefined lança um TypeError. No Console, a pilha de chamadas aponta
    // para esta linha; o link do arquivo abre o painel Sources aqui.
    const telefoneFormatado = dadosDaEstudante.telefone.trim();

    console.log("Telefone:", telefoneFormatado);
}

function exibirTelefoneCorrigida() {
    // A correção: confirmar que a informação existe antes de usá-la.
    if (dadosDaEstudante.telefone === undefined) {
        console.warn("O estudante não possui telefone cadastrado.");
        return;
    }

    console.log("Telefone:", dadosDaEstudante.telefone.trim());
}

document.getElementById("botao-executar-com-erro").addEventListener("click", exibirTelefoneComErro);
document.getElementById("botao-executar-corrigida").addEventListener("click", exibirTelefoneCorrigida);

// ---------- Exemplo 2: bug de lógica sem mensagem ----------

const itensDaCompra = [
    { nome: "Caderno", preco: 12.50, quantidade: 2 },
    { nome: "Caneta", preco: 2.20, quantidade: 5 },
    { nome: "Mochila", preco: 89.90, quantidade: 1 }
];

const elementoResultadoTotal = document.getElementById("resultado-total");

function calcularTotalComBug() {
    let totalDaCompra = 0;

    // O bug: o laço começa no índice 1 e pula o primeiro item da lista.
    // O console.log abaixo é a ferramenta de rastreio: ele mostra quais
    // itens entram na soma e revela que o Caderno nunca aparece.
    for (let indice = 1; indice < itensDaCompra.length; indice++) {
        console.log("Somando o item:", itensDaCompra[indice].nome);
        totalDaCompra = totalDaCompra + itensDaCompra[indice].preco * itensDaCompra[indice].quantidade;
    }

    return totalDaCompra;
}

function calcularTotalCorrigida() {
    let totalDaCompra = 0;

    // Correção: começar no índice 0 para percorrer a lista inteira.
    for (let indice = 0; indice < itensDaCompra.length; indice++) {
        totalDaCompra = totalDaCompra + itensDaCompra[indice].preco * itensDaCompra[indice].quantidade;
    }

    return totalDaCompra;
}

function exibirTotalDaCompra(totalCalculado, descricaoDaVersao) {
    elementoResultadoTotal.textContent = descricaoDaVersao + ": R$ " + totalCalculado.toFixed(2);
}

function calcularEExibirTotalComBug() {
    exibirTotalDaCompra(calcularTotalComBug(), "Total calculado com bug");
}

function calcularEExibirTotalCorrigido() {
    exibirTotalDaCompra(calcularTotalCorrigida(), "Total calculado corrigido");
}

document.getElementById("botao-calcular-com-bug").addEventListener("click", calcularEExibirTotalComBug);
document.getElementById("botao-calcular-corrigida").addEventListener("click", calcularEExibirTotalCorrigido);

// ---------- Exemplo 3: tipos inesperados com debugger ----------

const elementoResultadoSoma = document.getElementById("resultado-soma");

function somarValoresComBug() {
    // A propriedade value de um campo sempre devolve texto, mesmo que o
    // campo seja do tipo number.
    const valorDoProduto = document.getElementById("campo-valor-produto").value;
    const acrescimoInformado = document.getElementById("campo-acrescimo").value;

    // Com o DevTools aberto, a execução pausa aqui. Na área Scope do painel
    // Sources, os dois valores aparecem entre aspas: são textos.
    debugger;

    // O operador + entre textos concatena em vez de somar.
    const totalConcatenado = valorDoProduto + acrescimoInformado;

    elementoResultadoSoma.textContent = "Resultado com bug (concatenação): " + totalConcatenado;
    console.log("Tipos recebidos:", typeof valorDoProduto, "e", typeof acrescimoInformado);
}

function somarValoresCorrigida() {
    // Number converte o texto do campo para número antes da soma.
    const valorDoProduto = Number(document.getElementById("campo-valor-produto").value);
    const acrescimoInformado = Number(document.getElementById("campo-acrescimo").value);

    const totalSomado = valorDoProduto + acrescimoInformado;

    elementoResultadoSoma.textContent = "Resultado corrigido (soma): " + totalSomado;
    console.log("Tipos após a conversão:", typeof valorDoProduto, "e", typeof acrescimoInformado);
}

document.getElementById("botao-somar-com-bug").addEventListener("click", somarValoresComBug);
document.getElementById("botao-somar-corrigida").addEventListener("click", somarValoresCorrigida);
