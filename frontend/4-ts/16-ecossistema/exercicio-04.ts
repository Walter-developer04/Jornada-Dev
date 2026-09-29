/*
 * FERRAMENTAS DE BUILD (Build Tools)
 *
 * O que é:
 *   Programas que transformam o código-fonte TypeScript em arquivos que
 *   o Node.js ou o navegador conseguem executar.
 *
 * Para que serve:
 *   - Transpilar: converter TypeScript em JavaScript.
 *   - Gerar declarações de tipos (.d.ts) para quem consome o código como
 *     biblioteca.
 *   - Empacotar (bundling): juntar vários módulos em poucos arquivos.
 *   - Minificar: reduzir o tamanho dos arquivos finais.
 *
 * Quando usar:
 *   Sempre que o código precisar ser executado fora do editor: em
 *   produção, em uma biblioteca publicada ou em uma aplicação web.
 *
 * Por que a escolha da ferramenta importa:
 *   Cada uma resolve uma parte do problema, e é comum combinar duas.
 *
 * Ferramentas:
 *   - tsc: compilador oficial. Verifica tipos e gera .js e .d.ts. Não
 *     empacota nem minifica.
 *   - esbuild: escrito em Go, muito rápido. Transpila e empacota, mas
 *     não verifica tipos.
 *   - SWC: escrito em Rust, foco em transpilação rápida. É usado por
 *     frameworks como o Next.js.
 *   - tsup: camada simples sobre o esbuild para gerar pacotes com .d.ts.
 *   - Vite: servidor de desenvolvimento e build voltado a aplicações web.
 *
 * Combinação comum: um empacotador rápido gera o JavaScript e o
 * `tsc --noEmit` roda à parte só para verificar os tipos.
 *
 * Este projeto usa o tsc:
 *   npx tsc --project ./tsconfig.json
 * O resultado (.js e .d.ts) é gravado em ./dist.
 */
import { formatarReais, type Centavos } from "./exercicio-01";

// `export type` e `export interface` aparecem no .d.ts e não no .js.
export interface ResumoPedido {
  readonly id: number;
  readonly totalFormatado: string;
  readonly quantidadeDeItens: number;
}

export const VERSAO_EXEMPLO: string = "1.0.0";

// Função pura (mesma entrada, mesma saída, sem efeitos externos): facilita
// testes e permite que empacotadores removam código não utilizado (tree-shaking).
export function resumirPedido(
  id: number,
  valoresDosItens: readonly Centavos[],
): ResumoPedido {
  const totalEmCentavos = valoresDosItens.reduce(
    (total: number, atual: number): number => total + atual,
    0,
  );

  return {
    id,
    totalFormatado: formatarReais(totalEmCentavos),
    quantidadeDeItens: valoresDosItens.length,
  };
}

function demonstrarBuild(): void {
  console.log(`v${VERSAO_EXEMPLO}`, resumirPedido(101, [4500, 3000, 1500]));
}

if (require.main === module) {
  demonstrarBuild();
}