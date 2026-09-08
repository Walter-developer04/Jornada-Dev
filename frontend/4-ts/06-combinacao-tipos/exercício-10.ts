/**
 * ===================================================
 *  EXERCICIO 10 - DISCRIMINATED UNIONS (UNIOES DISCRIMINADAS)
 * ===================================================
 *  O QUE E:      Uniao de tipos de objetos que compartilham uma propriedade literal comum (tag).
 *  O QUE FAZ:    Permite ao compilador inferir as propriedades especificas apos checar o discriminante.
 *  SINTAXE:      type Uniao = { tipo: "a"; ... } | { tipo: "b"; ... };
 *  QUANDO USAR:  Para reducers, maquinas de estado, mensagens de protocolo e eventos.
 *  QUANDO NAO:   Quando os tipos na uniao nao possuem uma chave comum coerente com valor literal.
 * ===================================================
 */

// 1. EXEMPLO CORRETO
type FormaCirculo = {
  tipo: "circulo";
  raio: number;
};

type FormaRetangulo = {
  tipo: "retangulo";
  largura: number;
  altura: number;
};

type FormaGeometrica = FormaCirculo | FormaRetangulo;

function calcularArea(forma: FormaGeometrica): number {
  // A propriedade 'tipo' e o discriminante que orienta o TypeScript
  switch (forma.tipo) {
    case "circulo":
      return Math.PI * forma.raio ** 2;
    case "retangulo":
      return forma.largura * forma.altura;
  }
}

// 2. EXEMPLO INCORRETO
// Tentar acessar campos exclusivos sem verificar a propriedade discriminante falha
function obterRaioInseguro(forma: FormaGeometrica): number {
  // @ts-expect-error - A propriedade 'raio' nao existe no tipo 'FormaRetangulo'
  return forma.raio;
}

// 3. MINI-DESAFIO
// Adicione um tipo 'FormaQuadrado' com discriminante tipo: "quadrado" e lado: number a 'FormaGeometrica'.
type FormaQuadrado = {
  tipo: "quadrado";
  lado: number;
};
type FormasEstendidas = FormaGeometrica | FormaQuadrado;

// Solucao comentada:
// type FormaQuadrado = { tipo: "quadrado"; lado: number; };
// type FormasEstendidas = FormaGeometrica | FormaQuadrado;
