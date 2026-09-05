"use strict";
// Asserção de tipo (Type Assertion) com a sintaxe "as Tipo".
//
// Para que isso serve?
// Serve para informar ao compilador do TypeScript que consideramos determinado valor como pertencente a um tipo específico.
//
// Qual comportamento devo observar?
// A asserção orienta apenas o compilador na checagem estática. Ela NÃO converte nem transforma o dado em tempo de execução.
const valorInformado = "aprendendo tipagem no typescript";
const textoEmMaiusculas = valorInformado.toUpperCase();
console.log(textoEmMaiusculas);
