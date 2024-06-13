
/*

 document.getElementById('adicionar-tarefa').addEventListener('click', function() {
    const input = document.getElementById('nova-tarefa');
    const tarefa = input.value.trim();

    if (tarefa !== "") {
        const lista = document.getElementById('lista-tarefas');
        const item = document.createElement('li');
        item.textContent = tarefa;

        item.addEventListener('click', function() {
            item.classList.toggle('feito');
        });

        lista.appendChild(item);
        input.value = "";
        input.focus();
    }
});

/* Explicação
HTML (index.html): Estrutura básica da página com um campo de entrada para adicionar novas tarefas, um botão para adicionar e uma lista não ordenada 
(<ul>) para exibir as tarefas.
CSS (styles.css): Estilos para a página, incluindo a aparência dos elementos de entrada, botão e itens da lista. 
As tarefas marcadas como feitas recebem uma linha através e cor diferente.
JavaScript (script.js): Captura eventos de clique no botão de adicionar tarefa e nos itens da lista. 
Adiciona novas tarefas à lista e permite marcar tarefas como feitas ao clicar nelas.
Ao abrir o index.html em um navegador, você verá a interface para a lista de tarefas, onde pode adicionar novas tarefas e clicar nas tarefas para marcá-las como feitas.
*/