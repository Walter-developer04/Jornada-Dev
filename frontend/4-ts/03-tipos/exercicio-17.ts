// O conceito de Object Type (tipo de objeto).
//
// Para que isso serve?
// Descreve formalmente a forma esperada de um objeto em tempo de compilação, diferenciando a tipagem estática do TypeScript do valor JavaScript existente em tempo de execução.
//
// Qual comportamento devo observar?
// A anotação em linha "{ tituloRelatorio: string; totalVisualizacoes: number }" define os nomes e tipos exatos que o objeto JavaScript deve possuir.

const relatorioDesempenho: { tituloRelatorio: string; totalVisualizacoes: number } = {
  tituloRelatorio: "Metricas de Vendas Mensais",
  totalVisualizacoes: 480,
};

console.log(relatorioDesempenho.tituloRelatorio);
console.log(relatorioDesempenho.totalVisualizacoes);
