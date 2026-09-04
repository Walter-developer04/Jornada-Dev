// a variavel pontos recebe valor 0.
var pontos = 0;

// a variavel vidas recebe valor 3.
let vidas = 3;

// colocando as variaveis pontos e vidas dentro desse escopo de bloco.
{
    var pontos = 10;
    let vidas = 5;
}

// Na saída apenas o valor de pontos vai mudar pois o var não respeita o escopo de bloco.
// ja vidas não mudou pelo fato dela respeita o bloco. O js criou uma nova variavel temporária que só existe dentro desse escopo.
console.log(pontos);
console.log(vidas);