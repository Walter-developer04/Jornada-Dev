// O que é?
// Type predicates fazem narrowing no branch if.

// Para que serve?
// Dentro do if, a variável tem o tipo especificado no predicate.

// Comportamento:
// if (isType(valor)) { /* valor é Type */ }

interface Produto {
  nome: string;
  preco: number;
}

interface Servico {
  nome: string;
  horas: number;
}

type Item = Produto | Servico;

function isProduto(item: Item): item is Produto {
  return "preco" in item;
}

function processarItem(item: Item) {
  if (isProduto(item)) {
    // item é Produto
    console.log(`Produto: ${item.nome}, Preço: R$ ${item.preco}`);
  } else {
    // item é Servico
    console.log(`Serviço: ${item.nome}, Horas: ${item.horas}`);
  }
}

processarItem({ nome: "Livro", preco: 50 });
processarItem({ nome: "Consultoria", horas: 10 });
