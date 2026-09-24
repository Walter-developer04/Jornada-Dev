"use strict";
// Awaited<T> extrai o tipo resolvido por uma Promise.
// Tambem desembrulha Promises aninhadas, retornando o tipo final.
// equivalente a: number
async function buscarConteudo() {
    return "dados recebidos";
}
async function executar() {
    const conteudo = await buscarConteudo();
    const numero = 42;
    console.log(conteudo, numero);
}
executar();
// dados recebidos 42
