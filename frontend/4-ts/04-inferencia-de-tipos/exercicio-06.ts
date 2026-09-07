/**
 * exercicio 06 — inferencia em tipos literais de template
 * demonstra como inferir partes de strings usando template literal types.
 */

// ===== tipo basico =====
export type Saudacao = `ola ${string}`;

const mensagem: Saudacao = "ola mundo";        // ok
const outra: Saudacao = "ola typescript";      // ok
// const invalida: Saudacao = "hi world";      // ERRO INTENCIONAL: nao comeca com "ola "

// ===== extrair parte de string =====
export type ExtrairSufixo<T> = T extends `prefixo_${infer Resto}` ? Resto : never;

export type Teste1 = ExtrairSufixo<"prefixo_usuario">;  // "usuario"
export type Teste2 = ExtrairSufixo<"prefixo_admin">;    // "admin"
export type Teste3 = ExtrairSufixo<"outro_valor">;      // never

// ===== rota de api =====
export type Rota = `/usuarios/${number}` | `/publicacoes/${string}`;

const rotaUsuario: Rota = "/usuarios/123";      // ok
const rotaPublicacao: Rota = "/publicacoes/abc"; // ok
// const rotaInvalida: Rota = "/invalido/xyz";   // ERRO INTENCIONAL

// ===== eventos com capitalize =====
export type Evento = `on${Capitalize<string>}`;

const onClick: Evento = "onClick";        // ok
const onKeyDown: Evento = "onKeyDown";    // ok
// const onInvalid: Evento = "onInvalid"; // ERRO INTENCIONAL (lowercase)

// ===== combinando unions =====
export type Metodo = "get" | "post" | "put" | "delete";
export type Endpoint = `/${string}`;

export type Requisicao = `${Metodo} ${Endpoint}`;

const req1: Requisicao = "get /usuarios";  // ok
const req2: Requisicao = "post /dados";    // ok
// const req3: Requisicao = "patch /x";    // ERRO INTENCIONAL

// ===== inferencia de template literal =====
export type ExtrairMetodo<T> = T extends `${infer M} ${string}` ? M : never;

export type MetodoExtraido = ExtrairMetodo<"get /usuarios">;  // "get"

export {}; // isola este arquivo como modulo

// ===== verificando valores =====
console.log(mensagem);
console.log(outra);
console.log(rotaUsuario);
console.log(rotaPublicacao);
console.log(onClick);
console.log(onKeyDown);
console.log(req1);
console.log(req2);


