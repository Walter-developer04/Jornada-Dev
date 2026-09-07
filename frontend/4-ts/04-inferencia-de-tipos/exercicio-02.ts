/**
 * exercicio 02 — tipagem contextual (contextual typing)
 * demonstra como o typescript usa o contexto para inferir tipos.
 */

// ===== sem window (evita erro de lib dom) =====
// simula um elemento html sem depender da lib dom
interface Elemento {
  addEventListener(tipo: string, callback: (evento: Evento) => void): void;
}

interface Evento {
  button: number;
  clientX: number;
  clientY: number;
}

const meuElemento: Elemento = {
  addEventListener(tipo, _callback) {
    console.log(`listener adicionado para: ${tipo}`);
  }
};

// tipagem contextual: callback recebe o tipo do contexto
meuElemento.addEventListener("click", (evento) => {
  // evento e inferido como: Evento (pelo contexto)
  console.log(evento.button);   // ok: number
  console.log(evento.clientX);  // ok: number
  // console.log(evento.canguru); // ERRO INTENCIONAL: nao existe
});

// ===== arrays com callback =====
const nomes = ["alice", "bob", "charlie"]; // inferido: string[]

nomes.map((nome) => {
  // nome e inferido como: string (pelo contexto do array)
  return nome.toUpperCase();
});

// ===== contexto de objeto literal =====
const config = {
  // parametro inferido como number pelo contexto do objeto
  calcular: (x: number) => x * 2,
  
  // retorno inferido pelo corpo da funcao
  descrever: (valor: string) => `valor: ${valor}`,
};

// ===== funcao generica com tipagem contextual =====
function mapear<T, U>(itens: T[], funcao: (item: T) => U): U[] {
  return itens.map(funcao);
}

const valores = [1, 2, 3]; // inferido: number[]
const dobrados = mapear(valores, (n) => n * 2); // dobrados: number[]

// aqui o callback nao precisa de anotacao
// o tipo de n e inferido do array valores
const textos = mapear(valores, (n) => `numero ${n}`); // textos: string[]

// ===== verificando valores =====
console.log(dobrados); // [2, 4, 6]
console.log(textos); // ["numero 1", "numero 2", "numero 3"]
console.log(JSON.stringify(config));

export {}; // isola este arquivo como modulo