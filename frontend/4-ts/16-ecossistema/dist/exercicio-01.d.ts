export type Centavos = number;
export interface Produto {
    readonly nome: string;
    readonly precoEmCentavos: Centavos;
}
export declare function normalizarNome(nome: string): string;
export declare function formatarReais(valorEmCentavos: Centavos): string;
export declare function descreverProduto(produto: Produto): string;
