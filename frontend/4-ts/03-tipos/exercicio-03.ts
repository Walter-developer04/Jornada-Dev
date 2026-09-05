// Asserção de constante com "as const" (const assertion).
//
// Para que isso serve?
// Serve para instruir o TypeScript a inferir o tipo literal exato e marcar as propriedades como somente leitura (readonly).
//
// Qual comportamento devo observar?
// Os valores não são ampliados para tipos genéricos como "string" ou "number", ficando protegidos contra modificações.

const configuracaoAmbiente = {
  nomeServidor: "producao",
  portaConexao: 8080,
} as const;

console.log(configuracaoAmbiente.nomeServidor);
console.log(configuracaoAmbiente.portaConexao);
