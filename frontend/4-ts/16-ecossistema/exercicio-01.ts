/*
 * FORMATAÇÃO DE CÓDIGO (Formatting)
 *
 * O que é:
 *   Padronização automática da aparência do código: indentação, aspas,
 *   ponto e vírgula, quebras de linha e largura máxima das linhas.
 *   O formatador reescreve o texto, mas não muda o que o programa faz.
 *
 * Para que serve:
 *   Manter um único estilo em todo o projeto, independentemente de quem
 *   escreveu cada trecho.
 *
 * Quando usar:
 *   Em qualquer projeto, principalmente em equipe. Costuma rodar ao salvar
 *   o arquivo no editor e novamente antes do commit ou na integração contínua.
 *
 * Por que usar:
 *   - Elimina discussões sobre estilo nas revisões de código.
 *   - Deixa o histórico do Git mais limpo, sem alterações apenas de espaçamento.
 *   - Facilita a leitura, porque todo o código tem a mesma aparência.
 *
 * Ferramentas:
 *   - Prettier: formatador consolidado, com poucas opções de configuração.
 *       npx prettier --write .
 *   - Biome: formatador e linter em um só programa, escrito em Rust.
 *     Tem formatação em grande parte compatível com a do Prettier e
 *     costuma ser mais rápido.
 *       npx biome format --write .
 *
 * Divisão de papéis nas ferramentas:
 *   - Formatador: define como o código se parece.
 *   - Linter:     aponta padrões arriscados ou de baixa qualidade.
 *   - Compilador: verifica se os tipos estão coerentes.
 */

// Tipos descrevem a forma dos dados e são removidos na compilação.
export type Centavos = number;

export interface Produto {
  readonly nome: string;
  readonly precoEmCentavos: Centavos;
}

export function normalizarNome(nome: string): string {
  return nome.trim().toUpperCase();
}

// Valores monetários são guardados em centavos (inteiros) para evitar
// erros de arredondamento de ponto flutuante; a conversão fica só na exibição.
export function formatarReais(valorEmCentavos: Centavos): string {
  const formatador = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  });
  return formatador.format(valorEmCentavos / 100);
}

export function descreverProduto(produto: Produto): string {
  return `${normalizarNome(produto.nome)} - ${formatarReais(produto.precoEmCentavos)}`;
}

function demonstrarFormatacao(): void {
  console.log(descreverProduto({ nome: "  corte de cabelo  ", precoEmCentavos: 4500 }));
}

if (require.main === module) {
  demonstrarFormatacao();
}