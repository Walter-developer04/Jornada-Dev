import { type Centavos } from "./exercicio-01";
export interface ResumoPedido {
    readonly id: number;
    readonly totalFormatado: string;
    readonly quantidadeDeItens: number;
}
export declare const VERSAO_EXEMPLO: string;
export declare function resumirPedido(id: number, valoresDosItens: readonly Centavos[]): ResumoPedido;
