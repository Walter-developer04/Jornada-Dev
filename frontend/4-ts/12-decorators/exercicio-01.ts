// ==============================================================
// DECORATORS EM TYPESCRIPT
// ==============================================================

// O que são Decorators?
// Decorators são funções aplicadas a classes ou membros de classes para
// observar, modificar ou substituir seu comportamento de forma declarativa.
//
// Para que servem?
// Servem para adicionar comportamentos reutilizáveis, como logging,
// validação, registro e controle de comportamento.
//
// Como usar?
// Use o símbolo @ seguido do nome do decorator no elemento que será decorado.
// Exemplo: @logarExecucao
//
// Quando usar?
// Quando um comportamento técnico e reutilizável puder ser separado da
// lógica principal da classe ou do método.
//
// Quando não usar?
// Não use decorators apenas para deixar o código mais sofisticado.
// Evite-os quando uma função ou outra solução direta resolver o problema
// com menos complexidade.
//
// Este arquivo usa o modelo atual de decorators do TypeScript.
// O modelo atual é diferente do modelo legado baseado em
// --experimentalDecorators.
// ==============================================================

// ==============================================================
// EXEMPLO 1: Decorator de método para registrar a execução
// ==============================================================

// Este decorator é aplicado a métodos.
// Ele registra quando o método começa e quando termina.
// É útil para depuração e rastreamento de execução.

function logarExecucao<This, Argumentos extends unknown[], Retorno>(
    metodoOriginal: (this: This, ...argumentos: Argumentos) => Retorno,
    contexto: ClassMethodDecoratorContext<
        This,
        (this: This, ...argumentos: Argumentos) => Retorno
    >
) {
    const nomeDoMetodo = String(contexto.name);

    return function (
        this: This,
        ...argumentos: Argumentos
    ): Retorno {
        console.log(`Início do método "${nomeDoMetodo}".`);

        const resultado = metodoOriginal.call(this, ...argumentos);

        console.log(`Fim do método "${nomeDoMetodo}".`);

        return resultado;
    };
}

class Exemplo1 {
    @logarExecucao
    saudacao(nomeDoUsuario: string): string {
        return `Olá, ${nomeDoUsuario}!`;
    }
}

const exemplo1 = new Exemplo1();

console.log(exemplo1.saudacao("Walter"));

// ==============================================================
// EXEMPLO 2: Decorator de auto-accessor para validar valores
// ==============================================================

// Um field decorator atual recebe o valor inicial do campo e pode retornar
// uma função de inicialização. Ele não intercepta automaticamente toda
// leitura ou escrita futura da propriedade.
//
// Como este exemplo precisa validar cada atribuição, usamos um
// auto-accessor, que permite personalizar get e set.

function validarNomeNaoVazio<This>(
    accessorOriginal: {
        get(this: This): string;
        set(this: This, novoValor: string): void;
    },
    contexto: ClassAccessorDecoratorContext<This, string>
) {
    const nomeDaPropriedade = String(contexto.name);

    return {
        get(this: This): string {
            return accessorOriginal.get.call(this);
        },

        set(this: This, novoValor: string): void {
            if (novoValor.trim() === "") {
                throw new Error(
                    `A propriedade "${nomeDaPropriedade}" não pode ser vazia.`
                );
            }

            accessorOriginal.set.call(this, novoValor);
        },
    };
}

class Exemplo2 {
    @validarNomeNaoVazio
    accessor nomeDoUsuario = "Walter";
}

const exemplo2 = new Exemplo2();

console.log(exemplo2.nomeDoUsuario);

try {
    exemplo2.nomeDoUsuario = "";
} catch (erro: unknown) {
    if (erro instanceof Error) {
        console.error(erro.message);
    }
}

// ==============================================================
// EXEMPLO 3: Decorator de classe para congelar o protótipo
// ==============================================================

// Este é um decorator de classe.
// Ele congela o protótipo da classe, impedindo alterações estruturais
// ou substituições nas propriedades existentes do protótipo.
//
// Isso não congela as instâncias criadas pela classe.

function congelarPrototipo(
    classeOriginal: Function,
    _contexto: ClassDecoratorContext
): void {
    Object.freeze(classeOriginal.prototype);
}

@congelarPrototipo
class Exemplo3 {
    apresentarMensagem(): string {
        return "Classe com protótipo congelado.";
    }
}

const exemplo3 = new Exemplo3();

console.log(Object.isFrozen(Exemplo3.prototype));
console.log(exemplo3.apresentarMensagem());

try {
    Object.defineProperty(Exemplo3.prototype, "novoMetodo", {
        value: function () {
            return "Novo método";
        },
    });
} catch (erro: unknown) {
    if (erro instanceof TypeError) {
        console.error(
            "O protótipo está congelado e não pode ser alterado."
        );
    }
}

// ==============================================================
// EXEMPLO 4: Decorator de método com memoização
// ==============================================================

// Este decorator armazena o resultado de cada número calculado.
// Ele é útil quando o mesmo cálculo custa caro e pode ser reutilizado.
//
// O cache é separado por instância para evitar que uma instância reutilize
// resultados armazenados por outra instância.

function memoizarCalculo<This extends object>(
    metodoOriginal: (this: This, numero: number) => number,
    _contexto: ClassMethodDecoratorContext<
        This,
        (this: This, numero: number) => number
    >
) {
    const cachePorInstancia = new WeakMap<This, Map<number, number>>();

    return function (this: This, numero: number): number {
        let cacheDaInstancia = cachePorInstancia.get(this);

        if (!cacheDaInstancia) {
            cacheDaInstancia = new Map<number, number>();
            cachePorInstancia.set(this, cacheDaInstancia);
        }

        if (cacheDaInstancia.has(numero)) {
            console.log(`Resultado ${numero} encontrado no cache.`);
            return cacheDaInstancia.get(numero)!;
        }

        const resultado = metodoOriginal.call(this, numero);

        cacheDaInstancia.set(numero, resultado);

        return resultado;
    };
}

class Exemplo4 {
    @memoizarCalculo
    calcularFibonacci(numero: number): number {
        if (numero <= 1) {
            return numero;
        }

        return (
            this.calcularFibonacci(numero - 1) +
            this.calcularFibonacci(numero - 2)
        );
    }
}

const exemplo4 = new Exemplo4();

console.log(exemplo4.calcularFibonacci(10));
console.log(exemplo4.calcularFibonacci(10));