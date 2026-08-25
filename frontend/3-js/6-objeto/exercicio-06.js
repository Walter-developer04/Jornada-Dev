/* ==================== EXERCÍCIO 6 ==================== */
/* Tema: Jogos                         */
/* Conceito: Built-in Objects          */

// =============================================
// String — métodos que já existem em todo texto
// =============================================
const nomeDoJogo = "The Legend of Zelda";

// Tamanho do texto (quantos caracteres)
console.log(nomeDoJogo.length);
// Resultado: 19

// Transformar tudo em maiúsculo
console.log(nomeDoJogo.toUpperCase());
// Resultado: "THE LEGEND OF ZELDA"

// Transformar tudo em minúsculo
console.log(nomeDoJogo.toLowerCase());
// Resultado: "the legend of zelda"

// Trocar uma parte do texto por outra
console.log(nomeDoJogo.replace("Zelda", "Mario"));
// Resultado: "The Legend of Mario"

// Verificar se contém uma palavra
console.log(nomeDoJogo.includes("Zelda"));
// Resultado: true

// =============================================
// Number — métodos que já existem em todo número
// =============================================
const precoDoJogo = 249.9;

// Arredondar para cima
console.log(Math.ceil(precoDoJogo));
// Resultado: 250

// Arredondar para baixo
console.log(Math.floor(precoDoJogo));
// Resultado: 249

// Número aleatório entre 0 e 1
console.log(Math.random());

// Número aleatório de 1 a 10
console.log(Math.floor(Math.random() * 10) + 1);

// =============================================
// Array — métodos que já existem em toda lista
// =============================================
const jogos = ["Zelda", "Mario", "GTA", "Minecraft"];

// Quantos itens na lista
console.log(jogos.length);
// Resultado: 4

// Adicionar no final
jogos.push("Fortnite");
console.log(jogos);
// Resultado: ["Zelda", "Mario", "GTA", "Minecraft", "Fortnite"]

// Remover o último
jogos.pop();
console.log(jogos);
// Resultado: ["Zelda", "Mario", "GTA", "Minecraft"]

// Encontrar a posição de um item
console.log(jogos.indexOf("GTA"));
// Resultado: 2

// Juntar tudo em um texto
console.log(jogos.join(" | "));
// Resultado: "Zelda | Mario | GTA | Minecraft"

// Ordenar em ordem alfabética
console.log(jogos.sort());
// Resultado: ["GTA", "Mario", "Minecraft", "Zelda"]

// =============================================
// Date — data e hora já prontos
// =============================================
const hoje = new Date();

console.log(hoje.getFullYear());
// Resultado: 2026

console.log(hoje.getMonth() + 1);
// Resultado: 8 (agosto, por isso +1)

console.log(hoje.getDate());
// Resultado: 26