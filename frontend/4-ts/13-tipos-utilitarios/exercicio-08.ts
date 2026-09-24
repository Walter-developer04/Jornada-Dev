// Awaited<T> extrai o tipo resolvido por uma Promise.
// Tambem desembrulha Promises aninhadas, retornando o tipo final.

type RespostaApi = Promise<string>;

// Como a Promise resolve string, o tipo resultante e apenas string.
type ConteudoResposta = Awaited<RespostaApi>;

// Promises aninhadas tambem sao desembrulhadas ate o tipo final.
type RespostaAninhada = Awaited<Promise<Promise<number>>>;
// equivalente a: number

async function buscarConteudo(): Promise<string> {
    return "dados recebidos";
}

async function executar(): Promise<void> {
    const conteudo: ConteudoResposta = await buscarConteudo();
    const numero: RespostaAninhada = 42;
    console.log(conteudo, numero);
}

executar();
// dados recebidos 42