/**
 * ===================================================
 *  EXERCICIO 15 - COMPATIBILIDADE E ATRIBUICAO EM TIPOS COMBINADOS
 * ===================================================
 *  O QUE E:      Regras de subtipagem estrutural e checagem de propriedades excedentes.
 *  O QUE FAZ:    Demonstra como o compilador avalia compatibilidade em literais diretos vs variaveis.
 *  SINTAXE:      const alvo: TipoUniao = objetoCompativel;
 *  QUANDO USAR:  Para compreender por que literais de objeto sofrem verificacao estrita ao compor unioes.
 *  QUANDO NAO:   Evitar burlar checagens de excesso com castings desnecessarios.
 * ===================================================
 */

// 1. EXEMPLO CORRETO
type OpcaoTexto = { texto: string };
type OpcaoNumerica = { valor: number };
type ParametroEntrada = OpcaoTexto | OpcaoNumerica;

// Atribuicoes diretas de formatos validos em relacao aos membros da uniao
const entrada1: ParametroEntrada = { texto: "Parametro Alfa" };
const entrada2: ParametroEntrada = { valor: 99 };

// Compatibilidade estrutural via variavel intermediaria (sem cheque de excesso imediato)
const objetoIntermediario = { texto: "Parametro Beta", metadadoExtra: "info-99" };
const entradaValidaPorReferencia: ParametroEntrada = objetoIntermediario;

// 2. EXEMPLO INCORRETO
// Excess Property Check: passar propriedade inexistente em literal direto causa erro
// @ts-expect-error - O literal especifica 'metadadoExtra', que nao existe em nenhum membro da uniao
const entradaInvalida: ParametroEntrada = { texto: "Parametro Gama", metadadoExtra: "info-99" };

// 3. MINI-DESAFIO
// Declare uma variavel 'configuracaoValida' do tipo ParametroEntrada usando o membro OpcaoNumerica.
const configuracaoValida: ParametroEntrada = { valor: 250 };

// Solucao comentada:
// const configuracaoValida: ParametroEntrada = { valor: 250 };
