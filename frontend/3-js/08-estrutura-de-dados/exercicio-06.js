// Um objeto é uma estrutura que armazena dados em pares de chave e valor.
const pessoa = {
    nome: "Lucas",
    idade: 21
};

// JSON.stringify() converte um objeto JavaScript em uma string no formato JSON.
// Isso é útil para enviar dados, salvar em arquivo ou armazenar localmente.
const pessoaJSON = JSON.stringify(pessoa);

console.log(pessoaJSON); // '{"nome":"Lucas","idade":21}'

// JSON.parse() converte uma string no formato JSON de volta para um objeto JavaScript.
// Isso é útil para ler dados recebidos em formato de texto e trabalhar com eles como objetos.
const objeto = JSON.parse(pessoaJSON);

// Agora é possível acessar as propriedades do objeto normalmente.
console.log(objeto.nome); 
console.log(objeto.idade); 
