!DOCTYPE html>
<html lang="pt">
<head>
    <meta charset="UTF-8">
    <title>DOM Versão 1</title>
</head>
<body>
    <h1 id="titulo">Teste Duvidas</h1>
    <button id="mudarTexto">Mudar Texto</button>
    <div id="cardContainer" style="margin-top: 20px;"></div>

    <script>
        // Exemplo de uso do Local Storage
        localStorage.setItem('nome', 'João'); // Salvando um nome no Local Storage
        console.log('Nome no Local Storage:', localStorage.getItem('nome')); // Lendo o nome

        // Exemplo de uso do Session Storage
        sessionStorage.setItem('sessaoNome', 'sessao1'); // Salvando uma sessão
        console.log('Dados da Sessão:', sessionStorage.getItem('sessaoNome')); // Lendo a sessão

        // Exemplo de uso de Cookies
        document.cookie = "usuario=Ana; expires=Fri, 31 Dec 9999 23:59:59 GMT"; // Definindo um cookie
        console.log('Cookies:', document.cookie); // Lendo o cookie

        // Manipulação do DOM e eventos
        document.getElementById('mudarTexto').addEventListener('click', function() {
            document.getElementById('titulo').innerText = 'Texto Alterado'; // Mudando o texto do título
        });

        // Evento de teclado
        document.addEventListener('keydown', function(evento) {
            if (evento.key === 'Enter') {
                console.log('Enter foi pressionado');
            }
        });

        // Renderização de um loop de cards com JavaScript
        const produtos = [
            { nome: "Produto 1", preco: "R$10,00" },
            { nome: "Produto 2", preco: "R$20,00" },
            { nome: "Produto 3", preco: "R$30,00" }
        ];

        const container = document.getElementById('cardContainer');
        produtos.forEach(produto => {
            const card = <div class='card' style="border: 1px solid black; padding: 10px; margin-bottom: 5px;"><h2>${produto.nome}</h2><p>${produto.preco}</p></div>;
            container.innerHTML += card; // Adicionando cada card ao container
        });
    </script>
</body>
</html>


<!DOCTYPE html> <!-- Declaro o tipo de documento como HTML5 -->
<html lang="pt"> <!-- Defino que o idioma do documento é português -->
<head>
    <meta charset="UTF-8"> <!-- Defino a codificação de caracteres para UTF-8 -->
    <title>Local Session DOM Render</title> <!-- Específico o título da página -->
    <link rel="stylesheet" href="estilos.css">  <!-- Incluo o link para o arquivo CSS externo -->
</head>
<body>
    <h1 id="titulo">Dúvidas Tutoria 12/06/2024</h1> <!-- Crio um cabeçalho principal para a página -->
    <button id="mudarTexto">Mudar Texto</button> <!-- Adiciono um botão para mudar o texto -->
    <input type="text" id="tarefaInput" placeholder="Adicione uma nova tarefa"> <!-- Crio um campo de entrada de texto para novas tarefas -->
    <button id="adicionarTarefa">Adicionar Tarefa</button> <!-- Adiciono um botão para adicionar uma nova tarefa -->
    <ul id="listaDeTarefas"></ul> <!-- Defino uma lista não ordenada para as tarefas -->
    <div id="cardContainer" style="margin-top: 20px;"></div> <!-- Crio um contêiner para os cards com uma margem superior -->

    <script>
        // Exemplo de uso do Local Storage
        localStorage.setItem('nome', 'João'); // Salvo 'João' no Local Storage sob a chave 'nome'
        console.log('Nome no Local Storage:', localStorage.getItem('nome')); // Mostro o nome salvo no console

        // Exemplo de uso do Session Storage
        sessionStorage.setItem('sessaoNome', 'sessao1'); // Salvo 'sessao1' no Session Storage
        console.log('Dados da Sessão:', sessionStorage.getItem('sessaoNome')); // Mostro os dados da sessão no console

        // Exemplo de uso de Cookies
        document.cookie = "usuario=Ana; expires=Fri, 31 Dec 9999 23:59:59 GMT"; // Defino um cookie com expiração longa
        console.log('Cookies:', document.cookie); // Mostro o cookie no console

        // Manipulação do DOM e eventos
        document.getElementById('mudarTexto').addEventListener('click', function() {
            document.getElementById('titulo').innerText = 'Texto Alterado'; // Mudo o texto do título ao clicar no botão
        });

        // Evento de teclado
        document.addEventListener('keydown', function(evento) {
            if (evento.key === 'Enter') {
                console.log('Enter foi pressionado');
                adicionarTarefa();
            }
        });

        // Função para adicionar tarefas
        document.getElementById('adicionarTarefa').addEventListener('click', adicionarTarefa);

        function adicionarTarefa() {
            var input = document.getElementById('tarefaInput');
            var novaTarefa = input.value;
            if (novaTarefa.trim() === '') {
                alert('Por favor, digite uma tarefa!');
                return;
            }

            var lista = document.getElementById('listaDeTarefas');
            var item = document.createElement('li');
            item.textContent = novaTarefa;
            item.addEventListener('click', function() {
                lista.removeChild(item);
                salvarTarefas();
            });

            lista.appendChild(item);
            salvarTarefas();
            input.value = ''; // Limpo o campo de entrada
        }

        function salvarTarefas() {
            var tarefas = [];
            document.querySelectorAll('#listaDeTarefas li').forEach(function(item) {
                tarefas.push(item.textContent);
            });
            localStorage.setItem('tarefas', JSON.stringify(tarefas));
        }

        function carregarTarefas() {
            var tarefas = JSON.parse(localStorage.getItem('tarefas') || '[]');
            tarefas.forEach(function(tarefa) {
                var item = document.createElement('li');
                item.textContent = tarefa;
                document.getElementById('listaDeTarefas').appendChild(item);
                item.addEventListener('click', function() {
                    item.parentNode.removeChild(item);
                    salvarTarefas();
                });
            });
        }

        carregarTarefas(); // Carrego as tarefas salvas no Local Storage ao carregar a página

        // Renderização de um loop de cards com JavaScript
        const produtos = [
            { nome: "Produto 1", preco: "R$10,00" },
            { nome: "Produto 2", preco: "R$20,00" },
            { nome: "Produto 3", preco: "R$30,00" }
        ];

        const container = document.getElementById('cardContainer');
        produtos.forEach(produto => {
            const card = `<div class='card' style="border: 1px solid black; padding: 10px; margin-bottom: 5px;"><h2>${produto.nome}</h2><p>${produto.preco}</p></div>`;
            container.innerHTML += card; // Adiciono cada card ao container
        });
    </script>
</body>
</html>


/* estilos.css */

/* Aplico estilos básicos ao corpo do documento */
body {
    font-family: 'Arial', sans-serif;  /* Escolho Arial como a fonte do texto, com sans-serif como fallback */
    background-color: #f4f4f4;        /* Defino a cor de fundo de todo o corpo como cinza claro */
    margin: 0;                        /* Removo a margem padrão do corpo */
    padding: 20px;                    /* Adiciono um preenchimento de 20px em todos os lados do corpo */
    display: flex;                    /* Utilizo Flexbox para controlar o layout do corpo */
    flex-direction: column;           /* Alinho os itens em uma coluna vertical */
    align-items: center;              /* Centralizo os itens horizontalmente dentro do corpo */
}

/* Defino estilos para o cabeçalho h1 */
h1 {
    color: #333;                      /* Escolho um cinza escuro para a cor do texto do cabeçalho */
}

/* Aplico estilos que afetam tanto inputs quanto botões */
input, button {
    padding: 10px;                    /* Adiciono preenchimento de 10px em todas as direções */
    margin: 5px;                      /* Adiciono uma margem de 5px em todas as direções */
    border-radius: 5px;               /* Arredondo as bordas com um raio de 5px */
    border: 2px solid #ccc;           /* Incluo uma borda sólida de 2px com cor cinza claro */
}

/* Especifico estilos para botões */
button {
    background-color: #4CAF50;        /* Defino a cor de fundo dos botões como um verde vivo */
    color: white;                     /* Faço o texto do botão branco para contrastar com o fundo */
    cursor: pointer;                  /* Altero o cursor para indicar que o botão é clicável */
    border: none;                     /* Removo a borda dos botões */
}

/* Estabeleço estilos para o estado hover dos botões */
button:hover {
    background-color: #45a049;        /* Escureço a cor de fundo do botão quando o mouse está sobre ele */
}

/* Defino estilo específico para o input de tarefas */
#tarefaInput {
    width: 300px;                     /* Estabeleço a largura do input de tarefas para 300px */
}

/* Aplico estilos para a lista não ordenada */
ul {
    list-style-type: none;            /* Removo os marcadores de itens da lista */
    padding: 0;                       /* Elimino o preenchimento padrão da lista */
}

/* Defino estilos para os itens da lista */
li {
    background-color: #ffffff;        /* Defino a cor de fundo dos itens da lista para branco */
    border: 1px solid #ddd;           /* Adiciono uma borda sólida de 1px cinza claro */
    margin-top: -1px;                 /* Elimino o espaço entre os itens da lista */
    padding: 10px;                    /* Adiciono preenchimento de 10px em todas as direções */
    cursor: pointer;                  /* Mudo o cursor para indicar que o item é clicável */
}

/* Aplico estilos para o estado hover dos itens da lista */
li:hover {
    background-color: #f5f5f5;        /* Mudo a cor de fundo dos itens da lista ao passar o mouse */
}

/* Estabeleço estilos para os cards */
.card {
    background-color: #fff;           /* Faço a cor de fundo dos cards branca */
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2); /* Adiciono sombra ao redor do card para efeito 3D */
    transition: 0.3s;                 /* Adiciono uma transição suave para mudanças de estilo */
    width: 300px;                     /* Defino a largura do card para 300px */
    margin-bottom: 15px;              /* Adiciono uma margem inferior de 15px */
    padding: 15px;                    /* Incluo um preenchimento de 15px em todas as direções */
    border-radius: 10px;              /* Arredondo as bordas do card com um raio de 10px */
}

/* Especifico estilos para o estado hover dos cards */
.card:hover {
    box-shadow: 0 8px 16px 0 rgba(0,0,0,0.3); /* Intensifico a sombra quando o mouse está sobre o card */
}

/* Defino estilos para o container dos cards */
#cardContainer {
    display: flex;                    /* Uso Flexbox para controlar o layout dos cards */
    flex-direction: column;           /* Organizo os cards em uma coluna */
    align-items: center;              /* Centralizo os cards horizontalmente */
}
