// 1. O que é:
// O protocolo iterador e uma convencao onde um objeto possui um metodo next(),
// que retorna um objeto com duas propriedades: value (o valor) e done (se terminou).

// 2. Para que serve:
// Serve para padronizar como qualquer objeto em JavaScript fornece seus valores em
// sequencia, permitindo avancar um elemento por vez ate o fim da colecao.

// 3. Como usar:
// Implemente um metodo next() que devolve { value: qualquerValor, done: false }
// enquanto houver itens, e { value: undefined, done: true } ao terminar.

// 4. Quando usar:
// Use quando precisar de controle manual e granular sobre o avanco de uma sequencia,
// sem depender de loops automaticos.

// 5. Quando NÃO usar:
// Nao use quando a colecao ja for um array e apenas uma leitura completa e direta
// for necessaria, pois construir next() manualmente traz verbosidade desnecessaria.

// Fabrica de iterador para paginacao de itens
function criarIteradorPaginacao(totalPaginas) {
  let paginaAtual = 1;

  return {
    next() {
      if (paginaAtual <= totalPaginas) {
        const resultado = { value: 'Pagina ' + paginaAtual, done: false };
        paginaAtual += 1;
        return resultado;
      }
      return { value: undefined, done: true };
    }
  };
}

const paginador = criarIteradorPaginacao(3);

console.log(paginador.next()); // { value: 'Pagina 1', done: false }
console.log(paginador.next()); // { value: 'Pagina 2', done: false }
console.log(paginador.next()); // { value: 'Pagina 3', done: false }
console.log(paginador.next()); // { value: undefined, done: true }
