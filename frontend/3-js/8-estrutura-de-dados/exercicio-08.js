// Um Array pode armazenar objetos.
// Cada posição do Array pode conter um objeto com várias propriedades.
const alunos = [
    {
        nome: "Ana",
        idade: 20
    },
    {
        nome: "Carlos",
        idade: 22
    },
    {
        nome: "Marina",
        idade: 19
    }
];

// Exibe o Array completo com todos os objetos.
console.log(alunos);

// Para acessar uma propriedade de um objeto dentro do Array,
// primeiro indica-se o índice do objeto, depois a propriedade com ponto.
console.log(alunos[0].nome);   // "Ana"     (primeiro objeto, propriedade nome)
console.log(alunos[1].idade);  // 22        (segundo objeto, propriedade idade)
console.log(alunos[2].nome);   // "Marina"  (terceiro objeto, propriedade nome)
