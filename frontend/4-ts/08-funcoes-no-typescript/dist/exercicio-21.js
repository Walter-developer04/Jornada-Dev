"use strict";
// O que é?
// As assinaturas de sobrecarga definem a API pública; a implementação é o código real.
function formatar(valor, opcao) {
    if (typeof valor === "string") {
        return opcao ? valor.toUpperCase() : valor.toLowerCase();
    }
    return valor.toFixed(opcao);
}
console.log(formatar("teste", true));
console.log(formatar(3.1415, 2));
// Erro esperado (implementação não acessível diretamente):
// formatar("teste", 2);
