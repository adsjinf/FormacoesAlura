// Pega os elementos
const inputTarefa = document.getElementById('input-tarefa');
const formTarefa   = document.getElementById('form-tarefa');  // mais fácil lidar com o form inteiro
const listaTarefas = document.getElementById('lista-tarefas');

// Escuta o “enviar” do formulário (clique no botão ou Enter no input)
formTarefa.addEventListener('submit', function (evento) {
    evento.preventDefault();              // evita o reload da página

    const texto = inputTarefa.value.trim(); // tira espaços extras

    if (!texto) return;                   // se o campo estiver vazio, sai fora

    console.log('Tarefa digitada:', texto); // imprime no console ✔

    // Cria o <li> e joga na lista
    const li = document.createElement('li');
    li.textContent = texto;
    listaTarefas.appendChild(li);

    inputTarefa.value = '';               // limpa o input pro próximo item
    inputTarefa.focus();                  // já deixa o cursor pronto
});
