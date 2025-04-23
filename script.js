
const produtos = [
    {imagem: 'img/ovo-sonho-de-valsa-sem-fundo.png', produto: 'Ovo de Páscoa Sonho de Valsa', preco: 59.90},
    {imagem: 'img/ovo-bis-chocolate-sem-fundo.png', produto: 'Ovo de Páscoa Chocolate ao Leite', preco: 69.90},
    {imagem: 'img/ovo-patrulha-canina-sem-fundo.png', produto: 'Ovo de Páscoa Patrulha Canina', preco: 79.90},
    {imagem: 'img/ovo-ouro-branco-sem-fundo.png', produto: 'Ovo de Páscoa Ouro Branco 359g', preco: 89.90},
    {imagem: 'img/ovo-tripla-camada-avela-sem-fundo.png', produto: 'Ovo de Páscoa Triplo Avelã 320g', preco: 99.99}
];

let conteudoProdutos = '';
produtos.forEach(function(produto){
    conteudoProdutos += '<div class="caixa-produto"><img src="'+produto.imagem+'" alt=""><h1>'+produto.produto+'</h1><div id="caixa-produto2"><h2 id="preco"> R$ '+produto.preco+'</h2><button>Comprar</button></div></div>';
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
    const fecharProduto = document.querySelector('.caixa-compra');
    fecharProduto.style.display = 'none';
};

//  caixa de produtos

const buttonComprar = document.getElementById('comprar');
comprar.addEventListener('click',() => {
    const produtosSelecionados = [
        {img: 'img/ovo-sonho-de-valsa-sem-fundo.png', nomeProduto: 'Ovo de Páscoa Sonho de Valsa', precoProduto: 59.90},
        {img: 'img/ovo-bis-chocolate-sem-fundo.png', nomeProduto: 'Ovo de Páscoa Chocolate ao Leite', precoProduto: 69.90},
        {img: 'img/ovo-patrulha-canina-sem-fundo.png', nomeProduto: 'Ovo de Páscoa Patrulha Canina', precoProduto: 79.90},
        {img: 'img/ovo-ouro-branco-sem-fundo.png', nomeProduto: 'Ovo de Páscoa Ouro Branco 359g', precoProduto: 89.90},
        {img: 'img/ovo-tripla-camada-avela-sem-fundo.png', nomeProduto: 'Ovo de Páscoa Triplo Avelã 320g', precoProduto: 99.99}
    ];
    
    let conteudoCaixaProdutosSelecionados = '';
    produtosSelecionados.forEach(function(selecionados){
        conteudoCaixaProdutosSelecionados += '<div id="main-carrinho"><div class="caixa-compra"><img src="'+produtosSelecionados.img+'" alt=""><h1>'+produtosSelecionados.nomeProduto+'</h1><button onclick="fecharCaixaDeCompra()" id="remover">X</button><div class="info-linha"><div id="contador"><button class="botoes-contador" id="diminuir">-</button><input type="text" value="0" disabled id="quantidade"><button class="botoes-contador" id="somar">+</button></div><div id="soma-preco">R$, '+produtosSelecionados.precoProduto+'</div></div></div></div>'
    });
});
