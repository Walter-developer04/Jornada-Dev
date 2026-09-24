// Extract<T, U> mantem apenas os membros de T que existem em U.
// O resultado e a interseccao entre os dois tipos uniao.

type StatusPedido = "novo" | "pago" | "enviado" | "entregue" | "cancelado";

// Mantemos apenas os status que indicam pedido em andamento.
type StatusEmAndamento = Extract<StatusPedido, "pago" | "enviado" | "entregue">;

const statusAtual: StatusEmAndamento = "enviado";

console.log(statusAtual);
// enviado