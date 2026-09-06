/**
 * exercicio 04 — inferencia em tipos condicionais com infer
 * demonstra como extrair tipos usando a palavra-chave infer.
 */

// ===== tipo basico: extrair elemento de array =====
export type ExtrairElemento<T> = T extends (infer E)[] ? E : T;

export type Teste1 = ExtrairElemento<string[]>;   // string
export type Teste2 = ExtrairElemento<number[]>;   // number
export type Teste3 = ExtrairElemento<boolean>;    // boolean (nao e array)

// ===== extrair de tupla =====
export type PrimeiroDaTupla<T> = T extends [infer F, ...infer _Resto] ? F : never;

export type Teste4 = PrimeiroDaTupla<[string, number, boolean]>; // string
export type Teste5 = PrimeiroDaTupla<[number, string]>;          // number

// ===== extrair tipo de retorno de funcao =====
export type TipoRetorno<T> = T extends (...args: unknown[]) => infer R ? R : never;

function obterNome(): string { return "alice"; }
function obterIdade(): number { return 30; }

export type NomeTipo = TipoRetorno<typeof obterNome>;   // string
export type IdadeTipo = TipoRetorno<typeof obterIdade>; // number

// ===== extrair de promise =====
export type ExtrairPromise<T> = T extends Promise<infer V> ? V : T;

export type ResultadoPromise = ExtrairPromise<Promise<string>>; // string

// ===== exemplo pratico: api response =====
interface ApiResponse<T> {
  data: T;
  status: number;
}

export type ExtrairData<T> = T extends ApiResponse<infer D> ? D : never;

export type DadosUsuario = ExtrairData<ApiResponse<{ nome: string; idade: number }>>;
// DadosUsuario = { nome: string, idade: number }

export {}; // isola este arquivo como modulo


