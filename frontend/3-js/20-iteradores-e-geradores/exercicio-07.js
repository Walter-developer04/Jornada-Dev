// 1. O que é:
// E a capacidade do metodo next(arg) enviar um dado de volta para o ponto
// onde o operador yield pausou a funcao geradora.

// 2. Para que serve:
// Serve para criar comunicacao bidirecional com o gerador, permitindo que o codigo
// externo altere variaveis internas ou influencie os proximos passos da geracao.

// 3. Como usar:
// Chame next() pela primeira vez para inicializar ate o primeiro yield, e nas
// chamadas seguintes passe o argumento que se tornara o resultado da expressao yield.

// 4. Quando usar:
// Use em maquinas de estado, fluxos interativos de usuario ou simuladores
// onde a acao externa define a proxima resposta do sistema.

// 5. Quando NÃO usar:
// Nao use quando a sequencia de valores for fixa e independente de entradas externas,
// pois o envio de parametros adiciona complexidade desnecessaria.

// Simulador de assistente de compras (calcula desconto sob demanda)
function* assistenteCompras() {
  const precoOriginal = yield 'Informe o preco base do produto:';
  const cupom = yield 'Informe a porcentagem de desconto:';
  const valorDesconto = (precoOriginal * cupom) / 100;
  const precoFinal = precoOriginal - valorDesconto;

  return 'Preco final calculado: ' + precoFinal;
}

const assistente = assistenteCompras();

// Primeiro next inicia a execucao ate o primeiro yield
console.log(assistente.next().value); // 'Informe o preco base do produto:'

// Segundo next envia 200 como retorno do primeiro yield e pausa no segundo
console.log(assistente.next(200).value); // 'Informe a porcentagem de desconto:'

// Terceiro next envia 15 como retorno do segundo yield e encerra o gerador
const resultado = assistente.next(15);
console.log(resultado.value); // 'Preco final calculado: 170'
console.log('Gerador concluido?', resultado.done); // true
