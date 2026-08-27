// WeakMap é semelhante ao Map, mas só aceita objetos como chave.
const usuario = {
    nome: "Lucas"
};

// Cria um WeakMap. As chaves devem ser objetos.
const dados = new WeakMap();

// .set() associa o objeto "usuario" a um valor (nesse caso, outro objeto).
dados.set(usuario, {
    cargo: "Desenvolvedor",
    idade: 21
});

// .get() retorna o valor associado ao objeto informado como chave.
console.log(dados.get(usuario));          // {cargo: "Desenvolvedor", idade: 21}
console.log(dados.get(usuario).cargo);    // "Desenvolvedor"

// Diferença entre Map e WeakMap:
// Map    aceita qualquer tipo como chave (string, número, objeto, etc.)
// WeakMap aceita apenas objetos como chave.
// WeakMap não impede que o objeto seja removido da memória quando não é mais usado.
// Isso evita consumo desnecessário de memória.
