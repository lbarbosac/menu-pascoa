
const produtos = [
    {imagem: 'img/ovo-sonho-de-valsa-sem-fundo.png', produto: 'Ovo de Páscoa Sonho de Valsa', preco: 59.90},
    {imagem: 'img/ovo-bis-chocolate-sem-fundo.png', produto: 'Ovo de Páscoa Chocolate ao Leite', preco: 69.90},
    {imagem: 'img/ovo-patrulha-canina-sem-fundo.png', produto: 'Ovo de Páscoa Patrulha Canina', preco: 79.90},
    {imagem: 'img/ovo-ouro-branco-sem-fundo.png', produto: 'Ovo de Páscoa Ouro Branco 359g', preco: 89.90},
    {imagem: 'img/ovo-tripla-camada-avela-sem-fundo.png', produto: 'Ovo de Páscoa Triplo Avelã 320g', preco: 99.99}
];

let conteudoProdutos = '';
let contador = 0;
produtos.forEach(function(produto){
    conteudoProdutos += '<div class="caixa-produto"><img src="'+produto.imagem+'" alt=""><h1>'+produto.produto+'</h1><div id="caixa-produto2"><h2 id="preco"> R$ '+produto.preco+'</h2><button data-value="'+contador+'">Comprar</button></div></div>';
    contador++;
});

document.getElementById('container').innerHTML = conteudoProdutos;

// contador do carrinho 

const diminuirButton = document.getElementById('diminuir');
const somarButton = document.getElementById('somar');
const quantidadeButton = document.getElementById('quantidade');
 
let value = quantidadeButton.value;
 
somarButton.addEventListener('click',() => {
    value = ++value;
    quantidadeButton.value = value;
});
 
diminuirButton.addEventListener('click',() => {
    if (value > 0){
        value--;
        quantidadeButton.value = value;
    } else {
        alert('Você não pode diminuir mais!');
    }
});

// aqui é para fazer funcionar o carrinho de compras.

// abrir e fechar carrinho 

function abrirCarrinho() {
    const carrinho = document.getElementById('container-carrinho');
    carrinho.style.display = 'flex';
};

function fecharCarrinho() {
    const carrinho = document.getElementById('container-carrinho');
    carrinho.style.display = 'none';
};

//const btnAbrir = document.getElementById('btnAbrir');
//btnAbrir.addEventListener('click', abrirCarrinho);

//const btnFechar = document.getElementById('btnFechar');
//btnFechar.addEventListener('click', fecharCarrinho)

// aqui vai fechar a caixa de compra que esta lá dentro do carrinho, caixa de produtos

function fecharCaixaDeCompra() {
    const fecharProduto = document.querySelector('button[data-valeu]');
    fecharProduto.style.display = 'none';
};

//  caixa de produtos

const buttonComprar = document.querySelectorAll('button[data-value]');
buttonComprar.forEach(button => {
    button.addEventListener('click', function () {
        const index = this.getAttribute('data-value');
        const produtoSelecionado = produtos[index];
        const carrinho = document.getElementById("main-carrinho")
        carrinho.innerHTML = `<div class="caixa-compra">
                <img src="${produtos[index].imagem}" alt="${produtos[index].produto}">
                <h1>${produtos[index].produto}</h1>
                <button onclick="fecharCaixaDeCompra()" class="remover">X</button>
                <div class="info-linha">
                    <div class="contador">
                        <button class="botoes-contador" class="diminuir" id="diminuir">-</button>
                        <input type="text" value="0" disabled class="quantidade" id="quantidade">
                        <button class="botoes-contador" class="somar" id="somar" style="color: #28a745;">+</button>
                    </div>]
                    <div class="soma-preco">${produtos[index].preco}</div>
                </div>
            </div>`
    });
});