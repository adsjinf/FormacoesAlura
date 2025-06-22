// Pega os elementos
const inputTarefa = document.getElementById('input-tarefa');
const formTarefa   = document.getElementById('form-tarefa'); 
// mais fácil lidar com o form inteiro
const listaTarefas = document.getElementById('lista-tarefas');

let contadorId = 1;

// Escuta o “enviar” do formulário (clique no botão ou Enter no input)
formTarefa.addEventListener('submit', function (evento) {
    evento.preventDefault();              // evita o reload da página

    const texto = inputTarefa.value.trim(); // tira espaços extras

    if (!texto) return;                   // se o campo estiver vazio, sai fora

    console.log('Tarefa digitada:', texto); // imprime no console ✔

    // Cria o <li> e joga na lista
    const li = document.createElement('li');
    // li.textContent = texto;
    
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.id = `tarefa-${contadorId++}`;
    
    // Cria o label com texto da tarega
    const label = document.createElement('label');
    label.htmlFor = checkbox.id;
    label.textContent = texto;
    
    // Adiciona checkbox + label dentro do <li>
    li.appendChild(checkbox);
    li.appendChild(label);
    
    // Aciciona o <li> na lista
    listaTarefas.appendChild(li);

    // Limpa e foca o input
    inputTarefa.value = '';               // limpa o input pro próximo item
    inputTarefa.focus();                  // já deixa o cursor pronto
});
