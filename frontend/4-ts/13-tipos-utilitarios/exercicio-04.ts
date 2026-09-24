// Readonly<T> marca todas as propriedades de T como somente leitura.
// Apos aplicar, qualquer atribuicao a essas propriedades gera erro de tipo.

type Configuracao = {
    tema: string;
    idioma: string;
};

type ConfiguracaoFixa = Readonly<Configuracao>;

const config: ConfiguracaoFixa = {
    tema: "escuro",
    idioma: "pt-BR",
};

// config.tema = "claro";
// A linha acima nao compila porque Readonly impede a reatribuicao.

console.log(config);
// { tema: 'escuro', idioma: 'pt-BR' }