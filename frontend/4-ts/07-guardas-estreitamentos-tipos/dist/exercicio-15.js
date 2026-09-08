"use strict";
// O que é?
// switch statements também fazem narrowing baseado em igualdade.
function processarStatus(status) {
    switch (status) {
        case "ativo":
            // status é "ativo"
            console.log("Ativo");
            break;
        case "inativo":
            // status é "inativo"
            console.log("Inativo");
            break;
        case "pendente":
            // status é "pendente"
            console.log("Pendente");
            break;
        case "cancelado":
            // status é "cancelado"
            console.log("Cancelado");
            break;
    }
}
processarStatus("ativo");
processarStatus("inativo");
