"use strict";
// O "top type" seguro "unknown".
//
// Para que isso serve?
// Representa qualquer valor cujo tipo exato ainda não conhecemos, exigindo checagem prévia de tipo antes da realização de operações.
//
// Qual comportamento devo observar?
// Ao contrário de "any", o TypeScript proíbe a chamada direta de métodos sobre um valor "unknown" até que façamos uma checagem de tipo (narrowing) com "typeof".
const informacaoRecebida = "dados textuais de origem externa";
if (typeof informacaoRecebida === "string") {
    const mensagemFormatada = informacaoRecebida.toUpperCase();
    console.log(mensagemFormatada);
}
