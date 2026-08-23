/* ===================== OBJETOS EM JAVASCRIPT ===================== */ 

// Um objeto representa uma entidade do mundo real com características próprias.
// Sua estrutura básica usa chaves { } para abrir e fechar o bloco do objeto.
// Os dados dentro dele são guardados no formato "chave: valor", separados por vírgulas.
const pessoa = { 
  nome: "Lucas",         // "nome" é a chave (propriedade) e "Lucas" é o valor (string)
  idade: 21,             // "idade" é a chave e 21 é o valor (número)
  estaEstudando: true    // "estaEstudando" é a chave e true é o valor (booleano)
} 

// Acessamos o valor de uma propriedade do objeto usando o ponto (.) seguido do nome da chave.
console.log(pessoa.nome)
