"use strict";
// Declaração e tipagem básica de classes ("class").
//
// Para que isso serve?
// Permite definir tipos para propriedades de instância, parâmetros do construtor e valores de retorno de métodos em estruturas orientadas a objetos.
//
// Qual comportamento devo observar?
// O TypeScript valida se os argumentos passados ao instanciar a classe e os retornos dos métodos respeitam as tipagens definidas.
class GerenciadorConta {
    titularConta;
    saldoDisponivel;
    constructor(titular, saldoInicial) {
        this.titularConta = titular;
        this.saldoDisponivel = saldoInicial;
    }
    formatarSaldo() {
        return `Conta de ${this.titularConta}: R$ ${this.saldoDisponivel}`;
    }
}
const contaAtiva = new GerenciadorConta("Renata Oliveira", 2400);
console.log(contaAtiva.formatarSaldo());
