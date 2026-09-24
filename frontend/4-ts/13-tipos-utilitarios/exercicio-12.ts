// InstanceType<T> extrai o tipo da instancia criada por uma classe.
// Recebe o tipo construtor e retorna o formato da instancia gerada por ele.

class Conexao {
    host: string;
    porta: number;

    constructor(host: string, porta: number) {
        this.host = host;
        this.porta = porta;
    }

    abrir(): void {
        console.log(`Conectando em ${this.host}:${this.porta}`);
    }
}

// InstanceType retorna o tipo do objeto gerado por new Conexao().
type InstanciaConexao = InstanceType<typeof Conexao>;

const conexao: InstanciaConexao = new Conexao("localhost", 5432);

conexao.abrir();
// Conectando em localhost:5432