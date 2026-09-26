// Assunto: Conditional Types
// Um tipo condicional escolhe entre dois tipos possiveis:
// T extends Condicao ? TipoVerdadeiro : TipoFalso
// A palavra-chave "extends" faz o papel da condicao.

// 1. Condicao simples
// Se T extends string, o resultado e string[]; caso contrario, e never.
type ListaDeTexto<T> = T extends string ? string[] : never;

type ListaDeNomes = ListaDeTexto<string>;   // resultado: string[]
type ListaInvalida = ListaDeTexto<number>;  // resultado: never

// 2. Condicao encadeada
// Primeiro testa string, depois number e, por fim, entrega o tipo restante.
type Etiqueta<T> =
  T extends string ? "campo de texto"
  : T extends number ? "campo numerico"
  : "campo desconhecido";

type EtiquetaNome = Etiqueta<string>;   // "campo de texto"
type EtiquetaIdade = Etiqueta<number>;  // "campo numerico"
type EtiquetaAtivo = Etiqueta<boolean>; // "campo desconhecido"

// 3. Exemplo de utilizacao
// As constantes precisam respeitar exatamente o tipo que a condicao produziu.
const nomes: ListaDeNomes = ["Ana", "Bruno", "Carla"];
const etiquetaNome: EtiquetaNome = "campo de texto";
const etiquetaAtivo: EtiquetaAtivo = "campo desconhecido";

// 4. Demonstracao do resultado
console.log("Lista permitida:", nomes);
console.log("Etiqueta do campo nome:", etiquetaNome);
console.log("Etiqueta do campo ativo:", etiquetaAtivo);

// const erro: ListaInvalida = "texto"; // erro: never nao aceita valor algum.
