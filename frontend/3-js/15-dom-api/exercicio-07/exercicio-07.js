// API utilizada: document.createElement()
// O que faz: Cria uma nova instancia de elemento HTML em memoria com o nome da tag indicada.
// Por que e utilizada: Permite gerar elementos HTML de forma controlada antes de exibi-los no documento.

// Etapa 1: Acessar a area de destino onde o elemento sera colocado
const area = document.getElementById("area-criacao");

// Etapa 2: Criar o elemento em memoria
const novoParagrafo = document.createElement("p");

// Etapa 3: Definir o conteudo do elemento recem-criado
novoParagrafo.textContent = "Este paragrafo foi criado em memoria usando document.createElement()!";

// Etapa 4: Preparar o elemento e adiciona-lo na area de destino
novoParagrafo.className = "bloco-criado";
area.appendChild(novoParagrafo);
