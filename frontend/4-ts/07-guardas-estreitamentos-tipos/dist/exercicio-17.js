"use strict";
// O que é?
// instanceof funciona com classes personalizadas.
// Para que serve?
// Diferenciar instâncias de classes diferentes em unions.
// Comportamento:
// O lado direito deve ser um construtor (classe ou função).
class Carro {
    ligar() {
        console.log("Carro ligado");
    }
}
class Moto {
    ligar() {
        console.log("Moto ligada");
    }
}
function ligarVeiculo(veiculo) {
    if (veiculo instanceof Carro) {
        // veiculo é Carro
        veiculo.ligar();
    }
    else {
        // veiculo é Moto
        veiculo.ligar();
    }
}
ligarVeiculo(new Carro());
ligarVeiculo(new Moto());
