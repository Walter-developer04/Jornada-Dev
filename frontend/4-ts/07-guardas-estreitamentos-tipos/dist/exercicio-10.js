"use strict";
// O que é?
// === (igualdade estrita) compara valores sem conversão de tipo.
// Para que serve?
// O TypeScript usa === para fazer narrowing baseado no valor comparado.
// Sintaxe:
// if (valor === "literal") { /* valor é esse literal */ }
function processarStatus(status) {
    if (status === "ativo") {
        // status é "ativo"
        console.log("Status está ativo");
    }
    else if (status === "inativo") {
        // status é "inativo"
        console.log("Status está inativo");
    }
    else {
        // status é "pendente"
        console.log("Status está pendente");
    }
}
processarStatus("ativo");
processarStatus("inativo");
processarStatus("pendente");
