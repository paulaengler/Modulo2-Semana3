

/*
var lista = document.createElement("ul");

var itens = ["Camiseta, valor: 29.99", "Calça Jeans, valor: 49.99", "Tênis, valor: 79.99", "Boné, valor: 14.99"]
itens.forEach(function(item){
    var li = document.createElement("li");
    li.innerHTML = item;
    lista.append(li);
})
document.body.append(lista)

1
var texto = document.createTextNode('item da lista adicionado');
elemento.appendChild(texto);
var lista = document.getElementByTagName('ul')[0];
lista.appendChild(elemento);

2
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

document.addEventListener('DOMContentLoaded', renderizarProdutos); */