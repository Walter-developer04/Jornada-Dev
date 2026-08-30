// EXERCÍCIO 06 — Iterar sobre um array

const nomes = ["Ana", "Bruno", "Carla"];

// for clássico: você controla o índice
for (let i = 0; i < nomes.length; i++) {
  console.log(i, nomes[i]);
}

// for...of: percorre os valores direto
for (const nome of nomes) {
  console.log(nome);
}

// keys(): iterador só dos índices
for (const i of nomes.keys()) {
  console.log(i);
}

// values(): iterador só dos valores (é o padrão do for...of)
for (const v of nomes.values()) {
  console.log(v);
}

// entries(): iterador de pares [índice, valor]
for (const par of nomes.entries()) {
  console.log(par[0], par[1]);
}
