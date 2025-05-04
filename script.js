
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

function abrirCarrinho() {
    const carrinho = document.getElementById('container-carrinho');
    carrinho.style.display = 'flex';
};

function fecharCarrinho() {
    const carrinho = document.getElementById('container-carrinho');
    carrinho.style.display = 'none';
};

function fecharCaixaDeCompra() {
    const caixaCompra = document.getElementById('caixa-compra');
    caixaCompra.style.display = 'none';
};