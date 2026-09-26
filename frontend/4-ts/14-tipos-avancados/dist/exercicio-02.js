"use strict";
// Assunto: Conditional Types
// Um tipo condicional escolhe entre dois tipos possiveis:
// T extends Condicao ? TipoVerdadeiro : TipoFalso
// A palavra-chave "extends" faz o papel da condicao.
// 3. Exemplo de utilizacao
// As constantes precisam respeitar exatamente o tipo que a condicao produziu.
const nomes = ["Ana", "Bruno", "Carla"];
const etiquetaNome = "campo de texto";
const etiquetaAtivo = "campo desconhecido";
// 4. Demonstracao do resultado
console.log("Lista permitida:", nomes);
console.log("Etiqueta do campo nome:", etiquetaNome);
console.log("Etiqueta do campo ativo:", etiquetaAtivo);
// const erro: ListaInvalida = "texto"; // erro: never nao aceita valor algum.
