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
    const itemDaLista = document.createElement('li');
    // li.textContent = texto;

    // Cria a div containerItemLista e adiciona a classe pedida
    const containerItemLista = document.createElement('div');
    containerItemLista.classList.add('ListaIfInItemIfInContainer');

    // Insere o container dentro do <li>
    itemDaLista.appendChild(containerItemLista);

    // Cria o <p> que mostra o texto do usuário
    const pNome = document.createElement('p');
    pNome.textContent = texto;
    pNome.classList.add('texto-tarefa'); 

    // Cria botões de ação (Editar e remover)
    const btnEditar = document.createElement('button');
    btnEditar.textContent = 'Editar';
    btnEditar.classList.add('btn-editar');

    const btnRemover = document.createElement('button');
    btnRemover.textContent = 'Remover';
    btnRemover.classList.add('btn-remover');

    // Jogar tudo (texto + botões) dentro do containerItemLista
    containerItemLista.appendChild(pNome);
    containerItemLista.appendChild(btnEditar);
    containerItemLista.appendChild(btnRemover);

    // Finalmente, coloca o <li> na <ul>
    listaTarefas.appendChild(itemDaLista)

    // Limpa e foca o input
    inputTarefa.value = '';               // limpa o input pro próximo item
    inputTarefa.focus();                  // já deixa o cursor pronto

    // (Extra) Eventos dos botões
    btnEditar.addEventListener('click', () => {
        const novoTexto = prompt('Editar item:', pNome.textContent);
        if (novoTexto !== null && novoTexto.trim()) pNome.textContent = novoTexto.trim();
    });

    btnRemover.addEventListener('click', () => {
        listaTarefas.removeChild(itemDaLista);
    });
});
