// Omit<T, K> remove do tipo original as propriedades informadas.
// O resultado contem apenas as propriedades que nao foram omitidas.

type Pedido = {
    id: number;
    cliente: string;
    itens: string[];
    criadoEm: Date;
};

// Removemos itens e criadoEm, gerando um tipo menor.
type PedidoLista = Omit<Pedido, "itens" | "criadoEm">;

const pedidoLista: PedidoLista = {
    id: 10,
    cliente: "Joao",
};

console.log(pedidoLista);
// { id: 10, cliente: 'Joao' }