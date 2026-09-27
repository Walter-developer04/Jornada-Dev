// Ambient Module: descreve a interface de um modulo sem implementa-lo
// Fato tecnico: declare module NAO cria a biblioteca nem instala nada
// Explicacao didatica: e como uma ficha que diz ao TypeScript o que existe

declare module "minha-lib" {
    export function somar(a: number, b: number): number;
    export const versao: string;
}

// Uso dos tipos declarados, sem instalar nada
// import() como tipo le a assinatura da declaracao acima
type FuncaoSomar = typeof import("minha-lib").somar;

const somarLocal: FuncaoSomar = (a, b) => a + b;

// Esta funcao local e real e funciona de verdade
console.log(somarLocal(2, 3)); // 5

// Em um projeto real, a implementacao viria de um pacote instalado.
// Aqui a compilacao funciona porque usamos apenas os tipos declarados.