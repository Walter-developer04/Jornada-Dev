// 1. O que é:
// O operador yield* delega a iteracao para outro objeto iteravel ou outra
// funcao geradora, consumindo seus valores sequencialmente.

// 2. Para que serve:
// Serve para compor fluxos maiores a partir de subgeradores ou iteraveis menores,
// mantendo o codigo modular, reutilizavel e organizado.

// 3. Como usar:
// Dentro de uma funcao geradora, escreva yield* outroIteravel; para transferir
// a producao de valores ate que o iteravel delegado termine.

// 4. Quando usar:
// Use ao combinar diferentes sequencias (como menus com submenus ou etapas
// divididas em subetapas) em um unico fluxo iteravel.

// 5. Quando NÃO usar:
// Nao use quando você quer produzir o objeto iteravel inteiro como um unico valor
// (nesse caso, use yield sem asterisco).

// Subfluxo de permissoes basicas
function* permissoesUsuarioComum() {
  yield 'visualizar_perfil';
  yield 'editar_dados_proprios';
}

// Subfluxo de permissoes administrativas
function* permissoesAdministrador() {
  yield 'gerenciar_usuarios';
  yield 'acessar_relatorios';
}

// Gerador principal que delega conforme o nivel de acesso
function* montarPainelPermissoes(eAdministrador) {
  yield* permissoesUsuarioComum();

  if (eAdministrador) {
    yield* permissoesAdministrador();
  }

  // Tambem e possivel delegar diretamente para um array nativo
  yield* ['notificacoes_sistema'];
}

// Consumindo o gerador delegado para um usuario comum
console.log('Permissoes do usuario padrao:');
for (const perm of montarPainelPermissoes(false)) {
  console.log('-', perm);
}

// Consumindo o gerador delegado para um administrador
console.log('Permissoes do administrador:');
for (const perm of montarPainelPermissoes(true)) {
  console.log('-', perm);
}
