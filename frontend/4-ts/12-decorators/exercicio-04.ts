// ==============================================================
// EXERCICIO 04 - DECORATOR FACTORY E COMPOSIÇÃO
// ==============================================================
// O que é um Decorator Factory?
// É uma função que RETORNA um decorator, permitindo configurar
// o comportamento do decorator antes de aplicá-lo.
//
// Diferença fundamental:
// - Decorator: @meuDecorator (função aplicada diretamente)
// - Factory: @criarDecorator(config) (função que PRODUZ o decorator)
//
// Para que servem?
// Para criar decorators configuráveis e reutilizáveis.
//
// Como usar?
// Chamar a factory com parâmetros: @factory(arg1, arg2)
//
// Quando usar?
// Quando precisa do mesmo comportamento com configurações diferentes.
//
// Quando não usar?
// Quando não há necessidade de configuração.

// ==============================================================
// EXEMPLO 1: Decorator vs Decorator Factory
// ==============================================================
// Demonstra a diferença entre decorator direto e factory.

// Decorator direto (sem factory)
function logarSimples<This, Args extends unknown[], Return>(
    metodoOriginal: (this: This, ...args: Args) => Return,
    contexto: ClassMethodDecoratorContext<This>
) {
    return function(this: This, ...args: Args): Return {
        console.log(`[${String(contexto.name)}] executando...`);
        return metodoOriginal.apply(this, args);
    };
}

// Decorator factory (retorna um decorator)
function criarLogger(prefixo: string) {
    // Esta função é a factory. Ela RETORNA o decorator.
    return function<This, Args extends unknown[], Return>(
        metodoOriginal: (this: This, ...args: Args) => Return,
        contexto: ClassMethodDecoratorContext<This>
    ) {
        return function(this: This, ...args: Args): Return {
            console.log(`${prefixo} [${String(contexto.name)}] executando...`);
            return metodoOriginal.apply(this, args);
        };
    };
}

class ExemploComparacao {
    @logarSimples
    metodoComDecoratorDireto(): string {
        return "decorator direto";
    }
    
    @criarLogger("[DEBUG]")
    metodoComFactory(): string {
        return "factory configurável";
    }
}

const exemplo = new ExemploComparacao();
console.log(exemplo.metodoComDecoratorDireto());
console.log(exemplo.metodoComFactory());

// ==============================================================
// EXEMPLO 2: Factory com múltiplas configurações
// ==============================================================
// Demonstra uma factory que aceita várias opções de configuração.

interface ConfiguracaoDeLog {
    prefixo: string;
    mostrarArgumentos: boolean;
    mostrarTempo: boolean;
}

function criarLoggerAvancado(config: ConfiguracaoDeLog) {
    return function<This, Args extends unknown[], Return>(
        metodoOriginal: (this: This, ...args: Args) => Return,
        contexto: ClassMethodDecoratorContext<This>
    ) {
        return function(this: This, ...args: Args): Return {
            const inicio = performance.now();
            console.log(`${config.prefixo} ${String(contexto.name)} iniciado.`);
            
            if (config.mostrarArgumentos) {
                console.log(`  Argumentos: ${JSON.stringify(args)}`);
            }
            
            const resultado = metodoOriginal.apply(this, args);
            
            if (config.mostrarTempo) {
                const tempo = performance.now() - inicio;
                console.log(`  Tempo: ${tempo.toFixed(2)}ms`);
            }
            
            console.log(`${config.prefixo} ${String(contexto.name)} concluído.`);
            return resultado;
        };
    };
}

class ServicoDePedidos {
    @criarLoggerAvancado({ prefixo: "[PEDIDO]", mostrarArgumentos: true, mostrarTempo: true })
    processarPedido(idDoPedido: string, valor: number): string {
        return `Pedido ${idDoPedido} de R$ ${valor} processado`;
    }
    
    @criarLoggerAvancado({ prefixo: "[CONSULTA]", mostrarArgumentos: false, mostrarTempo: false })
    consultarStatus(idDoPedido: string): string {
        return `Status do ${idDoPedido}: confirmado`;
    }
}

const pedidos = new ServicoDePedidos();
console.log(pedidos.processarPedido("PED-001", 150.00));
console.log(pedidos.consultarStatus("PED-001"));

// ==============================================================
// EXEMPLO 3: Composição de múltiplos decorators
// ==============================================================
// Demonstra ordem de aplicação:
// - Decorators são aplicados de BAIXO para CIMA (bottom-up)
// - O decorator mais próximo do método é aplicado primeiro
// - Na execução, o mais externo (mais distante) executa primeiro

function primeiroDecorator<This, Args extends unknown[], Return>(
    metodoOriginal: (this: This, ...args: Args) => Return,
    contexto: ClassMethodDecoratorContext<This>
) {
    return function(this: This, ...args: Args): Return {
        console.log("→ Primeiro decorator (mais externo)");
        return metodoOriginal.apply(this, args);
    };
}

function segundoDecorator<This, Args extends unknown[], Return>(
    metodoOriginal: (this: This, ...args: Args) => Return,
    contexto: ClassMethodDecoratorContext<This>
) {
    return function(this: This, ...args: Args): Return {
        console.log("→ Segundo decorator (mais interno)");
        return metodoOriginal.apply(this, args);
    };
}

class ExemploDeComposicao {
    @primeiroDecorator
    @segundoDecorator
    metodoComposto(): string {
        console.log("→ Método original executado");
        return "resultado";
    }
}

const composicao = new ExemploDeComposicao();
console.log(composicao.metodoComposto());

// ==============================================================
// EXEMPLO 4: Combinando decorators com propósitos diferentes
// ==============================================================
// Demonstra combinação de logging + validação + cache
// usando factory para cada propósito.

function criarValidador(fn: (valor: number) => boolean, mensagemErro: string) {
    return function<This>(
        metodoOriginal: (this: This, valor: number) => number,
        contexto: ClassMethodDecoratorContext<This>
    ) {
        return function(this: This, valor: number): number {
            if (!fn(valor)) {
                throw new Error(`${String(contexto.name)}: ${mensagemErro}`);
            }
            return metodoOriginal.call(this, valor);
        };
    };
}

function criarCacheSimples() {
    const cache = new Map<string, unknown>();
    
    return function<This, Args extends unknown[], Return>(
        metodoOriginal: (this: This, ...args: Args) => Return,
        contexto: ClassMethodDecoratorContext<This>
    ) {
        return function(this: This, ...args: Args): Return {
            const chave = `${String(contexto.name)}:${JSON.stringify(args)}`;
            
            if (cache.has(chave)) {
                console.log(`Cache hit: ${chave}`);
                return cache.get(chave) as Return;
            }
            
            const resultado = metodoOriginal.apply(this, args);
            cache.set(chave, resultado);
            return resultado;
        };
    };
}

const validarPositivo = criarValidador(
    (valor) => valor > 0,
    "Valor deve ser positivo"
);

const cacheDeResultados = criarCacheSimples();

class ServicoDeCalculosComplexos {
    @cacheDeResultados
    @validarPositivo
    calcularQuadrado(numero: number): number {
        console.log(`Calculando quadrado de ${numero}...`);
        return numero * numero;
    }
}

const servico = new ServicoDeCalculosComplexos();
console.log(servico.calcularQuadrado(5));
console.log(servico.calcularQuadrado(5));

try {
    servico.calcularQuadrado(-3);
} catch (erro) {
    console.error(erro.message);
}
