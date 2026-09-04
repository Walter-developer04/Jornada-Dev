"use strict"
/*
    =========================================
             TIPOS DE DADOS EM JS
    =========================================
 */

    // STRING: tudo que vai entre "" ou '' a maquina vê como um conjunto de caractere. E o que são caracteres ? 
    // Palavras, numeros, simbolos são vistos como string caso esteja entre as aspas.
    let texto = "abc123@";
    console.log( texto)

    // NUMBER: servem para guarda valores numericos. 
    const numero = 100;
    console.log( numero);

    // BOOLEANO: indica se algo é verdadeiro ou falso.
    const verdadeiro = true;
    console.log( verdadeiro)

    const falso = false;
    console.log( falso)

    // NULL: representa a ausência intencional de um valor. 
    // É quando você diz explicitamente que uma variável não tem valor/objeto.
    // A diferença para undefined é que null é atribuído propositalmente. [[2]]
    let valorNulo = null;
    console.log( valorNulo) // retorna "object" (peculiaridade do JS)
    console.log(valorNulo) // retorna null

    // UNDEFINED: indica que uma variável foi declarada mas não foi inicializada.
    // Ou seja, não tem valor atribuído ainda. Representa ausência de valor. [[4]]
    let naoAtribuido;
    console.log( naoAtribuido) // retorna "undefined"
    console.log(naoAtribuido) // retorna undefined

    // BIGINT: usado para números inteiros MUITO grandes que ultrapassam o limite do tipo number.
    // Para criar, adiciona-se 'n' no final do número ou usa-se BigInt(). [[7]]
    // Útil para cálculos com números gigantescos sem perder precisão. [[8]]
    const numeroGrande = 1234567890123456789012345678901234567890n;
    console.log( numeroGrande) // retorna "bigint"
    
    const outroGrande = BigInt(9007199254740991);
    console.log(outroGrande) // retorna 9007199254740991n

    // SYMBOL: cria valores únicos e imutáveis. 
    // Cada Symbol é único, mesmo que tenham a mesma descrição. [[16]]
    // Muito usado para criar propriedades de objetos que não colidem com outras propriedades. [[15]]
    const simbolo1 = Symbol("descricao");
    const simbolo2 = Symbol("descricao");
    
    console.log( simbolo1) // retorna "symbol"
    console.log(simbolo1 === simbolo2) // retorna false (são únicos!)
    
    // Uso prático: propriedades únicas em objetos
    const obj = {};
    const chavePrivada = Symbol("chave");
    obj[chavePrivada] = "valor secreto";
    console.log(obj) // a propriedade Symbol não aparece em iterações normais