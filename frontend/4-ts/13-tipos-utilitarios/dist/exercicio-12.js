"use strict";
// InstanceType<T> extrai o tipo da instancia criada por uma classe.
// Recebe o tipo construtor e retorna o formato da instancia gerada por ele.
class Conexao {
    constructor(host, porta) {
        this.host = host;
        this.porta = porta;
    }
    abrir() {
        console.log(`Conectando em ${this.host}:${this.porta}`);
    }
}
const conexao = new Conexao("localhost", 5432);
conexao.abrir();
// Conectando em localhost:5432
