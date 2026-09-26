// Assunto: Literal Types
// Literal Types restringem um tipo a valores exatos,
// em vez de aceitar qualquer string, number ou boolean.

// 1. Status aceita apenas estes tres valores literais.
type Status = "ativo" | "inativo" | "pendente";

// 2. O campo status usa o tipo literal como uma restricao mais forte que string.
type Usuario = {
  nome: string;
  status: Status;
};

// 3. Exemplo de utilizacao
const usuarioAtivo: Usuario = {
  nome: "Ana",
  status: "ativo",
};

const usuarioPendente: Usuario = {
  nome: "Bruno",
  status: "pendente",
};

// 4. Demonstracao do resultado
console.log("Status de Ana:", usuarioAtivo.status);
console.log("Status de Bruno:", usuarioPendente.status);

// Nem toda string e aceita: as linhas abaixo causariam erro de compilacao.
// usuarioAtivo.status = "desconectado"; // erro: "desconectado" nao existe em Status.
// const usuarioErrado: Usuario = { nome: "Carla", status: "apagado" };

// 5. Literal types tambem funcionam com numeros.
type Nota = 1 | 2 | 3 | 4 | 5;

const notaFinal: Nota = 5;

console.log("Nota final:", notaFinal);
