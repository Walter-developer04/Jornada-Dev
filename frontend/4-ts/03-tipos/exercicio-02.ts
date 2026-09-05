// Asserção de tipo para "any" (as any).
//
// Para que isso serve?
// Serve para desativar temporariamente a verificação estática do TypeScript sobre determinado valor específico.
//
// Qual comportamento devo observar?
// O compilador deixa de validar propriedades ou métodos chamados nesse valor.
// Isso reduz a segurança da tipagem e não deve ser utilizado como padrão no dia a dia.

const pontuacaoOriginal: number = 850;
const pontuacaoFlexivel: any = pontuacaoOriginal as any;

console.log(pontuacaoFlexivel);
