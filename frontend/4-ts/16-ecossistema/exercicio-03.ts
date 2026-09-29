/*
 * PACOTES ÚTEIS: VALIDAÇÃO EM EXECUÇÃO (zod)
 *
 * O que é:
 *   O zod é uma biblioteca para descrever a forma esperada dos dados e
 *   verificá-los durante a execução do programa.
 *
 * Por que o TypeScript sozinho não basta (Type Erasure):
 *   Os tipos existem apenas na compilação. O JavaScript gerado não os contém.
 *   Dados que vêm de fora (corpo de requisições, formulários, arquivos JSON,
 *   variáveis de ambiente, banco de dados) não têm garantia de seguir o tipo
 *   declarado. Escrever `as Usuario` só silencia o compilador, não valida nada.
 *
 * Para que serve:
 *   Um único esquema faz duas coisas: valida o dado em execução e gera o
 *   tipo TypeScript correspondente com `z.infer`. Assim, tipo e validação
 *   não ficam duplicados nem divergem com o tempo.
 *
 * Quando usar:
 *   Em qualquer fronteira do sistema onde entram dados não confiáveis:
 *   rotas de API, Server Actions, formulários, leitura de configuração.
 *
 * Por que usar:
 *   - Rejeita dados inválidos antes que causem erros mais adiante.
 *   - Devolve mensagens de erro por campo, úteis para o usuário e para logs.
 *   - `.safeParse()` retorna o resultado sem lançar exceção, o que permite
 *     tratar a falha como fluxo normal do programa.
 */
import { z } from "zod";

export const esquemaUsuario = z.object({
  id: z.number().int().positive(),
  nome: z.string().min(3, "O nome deve ter ao menos 3 caracteres"),
  email: z.string().email("E-mail em formato inválido"),
  idade: z.number().int().min(18, "Idade mínima: 18 anos").optional(),
});

// Type Inference: o tipo é derivado do esquema.
export type Usuario = z.infer<typeof esquemaUsuario>;

// Recebe `unknown` porque a origem do dado não é confiável.
export function validarUsuario(dados: unknown): Usuario | null {
  const resultado = esquemaUsuario.safeParse(dados);

  if (!resultado.success) {
    const problemas = resultado.error.issues.map(
      (problema) => `${problema.path.map(String).join(".")}: ${problema.message}`,
    );
    console.error("Dados inválidos:", problemas);
    return null;
  }

  return resultado.data;
}

function demonstrarValidacao(): void {
  const dadosValidos: unknown = {
    id: 1,
    nome: "Lucas Silva",
    email: "lucas@exemplo.com",
    idade: 30,
  };
  const dadosInvalidos: unknown = { id: -5, nome: "Lu", email: "nao-e-email" };

  console.log("Válido:", validarUsuario(dadosValidos));
  console.log("Inválido:", validarUsuario(dadosInvalidos));
}

if (require.main === module) {
  demonstrarValidacao();
}