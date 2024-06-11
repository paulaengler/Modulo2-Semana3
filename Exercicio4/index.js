const produtos = [
    { nome: "Camiseta", valor: 29.99 },
    { nome: "Calça Jeans", valor: 49.99 },
    { nome: "Tênis", valor: 79.99 },
    { nome: "Boné", valor: 14.99 }
];

function renderizarProdutos() {
    const lista = document.getElementById('produto-lista');
    
    produtos.forEach(produto => {
        const item = document.createElement('li');
        const nome = document.createElement('span');
        nome.textContent = produto.nome;
        
        const valor = document.createElement('span');
        valor.textContent = `R$ ${produto.valor.toFixed(2)}`;
        valor.classList.add('valor');
        
        item.appendChild(nome);
        item.appendChild(valor);
        
        lista.appendChild(item);
    });
}

document.addEventListener('DOMContentLoaded', renderizarProdutos);