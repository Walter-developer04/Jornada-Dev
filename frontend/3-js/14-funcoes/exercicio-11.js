// Exercício 11: Built-in Functions (Funções Embutidas da Linguagem)

// Funções built-in são recursos nativos da especificação ECMAScript.
// Já vêm prontas para uso, sem depender do DOM, do navegador ou de bibliotecas externas.

// 1. parseInt(): converte uma sequência de caracteres em um número inteiro na base informada.
const textoNumero = "42";
const numero = parseInt(textoNumero, 10);
console.log("parseInt():", numero, typeof numero); // 42 "number"

// 2. isFinite(): verifica se um número fornecido é um valor finito válido.
console.log("isFinite(100):", isFinite(100)); // true
console.log("isFinite(Infinity):", isFinite(Infinity)); // false

// 3. Math.max(): função utilitária do objeto padrão Math para encontrar o maior valor numérico.
const maior = Math.max(10, 45, 82, 19);
console.log("Math.max():", maior); // 82