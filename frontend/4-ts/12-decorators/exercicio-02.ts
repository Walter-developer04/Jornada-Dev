// ==============================================================
// EXERCICIO 02 - DECORATORS DE MÉTODOS
// ==============================================================
// O que são Decorators de Métodos?
// São funções aplicadas a métodos de classe para modificar ou
// estender seu comportamento usando a sintaxe @nomeDoDecorator.
//
// Para que servem?
// Para adicionar funcionalidades transversais (logging, validação,
// cache, medição de tempo) sem poluir a lógica de negócio.
//
// Como usar?
// Aplicar o decorator antes da definição do método:
// @meuDecorator
// metodo() { ... }
//
// Quando usar?
// Quando um comportamento pode ser reutilizado em vários métodos.
//
// Quando não usar?
// Quando a lógica é específica de um único método ou é simples
// demais para justificar a abstração.

// ==============================================================
// EXEMPLO 1: Decorator que loga a execução de um método
// ==============================================================
// Demonstra o uso básico de ClassMethodDecoratorContext
// e a substituição do método original por uma versão que loga.

function logarExecucaoDoMetodo<This, Args extends unknown[], Return>(
    metodoOriginal: (this: This, ...args: Args) => Return,
    contexto: ClassMethodDecoratorContext<This>
) {
    // Retorna uma nova função que substitui o método original
    function metodoSubstituto(this: This, ...args: Args): Return {
        console.log(`Método "${String(contexto.name)}" iniciado.`);
        const resultado = metodoOriginal.apply(this, args);
        console.log(`Método "${String(contexto.name)}" concluído.`);
        return resultado;
    }
    return metodoSubstituto;
}

class ServicoDeSaudacao {
    @logarExecucaoDoMetodo
    saudar(nome: string): string {
        return `Olá, ${nome}!`;
    }
}

const servico = new ServicoDeSaudacao();
console.log(servico.saudar("Walter"));

// ==============================================================
// EXEMPLO 2: Decorator que mede tempo de execução
// ==============================================================
// Demonstra medição de performance com preservação de this
// e tipagem correta dos argumentos.

function medirTempoDeExecucao<This, Args extends unknown[], Return>(
    metodoOriginal: (this: This, ...args: Args) => Return,
    contexto: ClassMethodDecoratorContext<This>
) {
    function metodoSubstituto(this: This, ...args: Args): Return {
        const inicio = performance.now();
        const resultado = metodoOriginal.apply(this, args);
        const fim = performance.now();
        console.log(`"${String(contexto.name)}" levou ${(fim - inicio).toFixed(2)}ms`);
        return resultado;
    }
    return metodoSubstituto;
}

class ServicoDeCalculo {
    @medirTempoDeExecucao
    somarNumeros(numeros: number[]): number {
        return numeros.reduce((total, numero) => total + numero, 0);
    }
}

const calculo = new ServicoDeCalculo();
console.log(calculo.somarNumeros([1, 2, 3, 4, 5]));

// ==============================================================
// EXEMPLO 3: Decorator que modifica o valor retornado
// ==============================================================
// Demonstra como um decorator pode transformar o resultado
// do método original antes de devolvê-lo ao chamador.

function converterResultadoParaMaiusculas<This, Args extends unknown[]>(
    metodoOriginal: (this: This, ...args: Args) => string,
    contexto: ClassMethodDecoratorContext<This>
) {
    function metodoSubstituto(this: This, ...args: Args): string {
        const resultadoOriginal = metodoOriginal.apply(this, args);
        return resultadoOriginal.toUpperCase();
    }
    return metodoSubstituto;
}

class GeradorDeMensagens {
    @converterResultadoParaMaiusculas
    gerarMensagem(texto: string): string {
        return `mensagem: ${texto}`;
    }
}

const gerador = new GeradorDeMensagens();
console.log(gerador.gerarMensagem("importante"));

// ==============================================================
// EXEMPLO 4: Decorator que valida argumentos antes da execução
// ==============================================================
// Demonstra interceptação de argumentos para validação
// antes de chamar o método original.

function validarArgumentosNumericos<This>(
    metodoOriginal: (this: This, ...args: number[]) => number,
    contexto: ClassMethodDecoratorContext<This>
) {
    function metodoSubstituto(this: This, ...args: number[]): number {
        for (let indice = 0; indice < args.length; indice++) {
            if (typeof args[indice] !== "number" || !isFinite(args[indice])) {
                throw new Error(`Argumento ${indice + 1} de "${String(contexto.name)}" deve ser um número válido.`);
            }
        }
        return metodoOriginal.apply(this, args);
    }
    return metodoSubstituto;
}

class CalculadoraFinanceira {
    @validarArgumentosNumericos
    calcularJurosCompostos(capital: number, taxa: number, periodo: number): number {
        return capital * Math.pow(1 + taxa, periodo);
    }
}

const calculadora = new CalculadoraFinanceira();
console.log(calculadora.calcularJurosCompostos(1000, 0.05, 12));

try {
    calculadora.calcularJurosCompostos(1000, NaN, 12);
} catch (erro) {
    console.error(erro.message);
}
