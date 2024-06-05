// Função para iniciar a interação com o usuário
function iniciarInteracao() {
    // Solicita o nome do usuário
    const nome = prompt("Por favor, insira o seu nome:");

    // Verifica se o nome foi inserido
    if (nome) {
        // Pergunta se o usuário quer continuar com a interação
        const continuar = confirm(`Olá, ${nome}! Você deseja continuar com a interação?`);

        // Exibe uma mensagem de acordo com a resposta do usuário
        if (continuar) {
            alert(`Ótimo, ${nome}! Vamos continuar.`);
        } else {
            alert(`Tudo bem, ${nome}. Até a próxima!`);
        }
    } else {
        alert("Você não inseriu um nome. Tente novamente.");
    }
}

// Adiciona um evento de clique ao botão para iniciar a interação
document.getElementById("startButton").addEventListener("click", iniciarInteracao);


/* VER ------ Função para exibir alertas personalizados
function showAlert(message, type) {
    const alertDiv = document.getElementById('alert');
    alertDiv.textContent = message;

    // Remove todas as classes existentes e adiciona as novas
    alertDiv.classList.remove('hidden', 'success', 'error');
    alertDiv.classList.add('visible', type);

    // Oculta o alerta após 3 segundos
    setTimeout(() => {
        alertDiv.classList.remove('visible');
        alertDiv.classList.add('hidden');
    }, 3000);
}
body {
    font-family: Arial, sans-serif;
}

.alert {
    display: none;
    padding: 10px;
    margin: 10px 0;
    border: 1px solid transparent;
    border-radius: 4px;
}

.alert.hidden {
    display: none;
}

.alert.visible {
    display: block;
}

.alert.success {
    color: #155724;
    background-color: #d4edda;
    border-color: #c3e6cb;
}

.alert.error {
    color: #721c24;
    background-color: #f8d7da;
    border-color: #f5c6cb;
} */