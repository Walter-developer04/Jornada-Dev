"use strict";
// Assunto: Literal Types
// Literal Types restringem um tipo a valores exatos,
// em vez de aceitar qualquer string, number ou boolean.
// 3. Exemplo de utilizacao
const usuarioAtivo = {
    nome: "Ana",
    status: "ativo",
};
const usuarioPendente = {
    nome: "Bruno",
    status: "pendente",
};
// 4. Demonstracao do resultado
console.log("Status de Ana:", usuarioAtivo.status);
console.log("Status de Bruno:", usuarioPendente.status);
const notaFinal = 5;
console.log("Nota final:", notaFinal);
