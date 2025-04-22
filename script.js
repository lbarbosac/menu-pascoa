
const produtos = [
    {imagem:'testes-js/img/ovo-sonho-de-valsa-sem-fundo.png', produto: 'Ovo de Páscoa Sonho de Valsa', preco: 59.90},
    {imagem: 'testes-js/img/ovo-bis-chocolate-sem-fundo.png', produto: 'Ovo de Páscoa Chocolate ao Leite', preco: 69.90},
    {imagem: 'testes-js/img/ovo-patrulha-canina-sem-fundo.png', produto: 'Ovo de Páscoa Patrulha Canina', preco: 79.90},
    {imagem: 'testes-js/img/ovo-ouro-branco-sem-fundo.png', produto: 'Ovo de Páscoa Ouro Branco 359g', preco: 89.90},
    {imagem: 'testes-js/img/ovo-tripla-camada-avela-sem-fundo.png', produto: 'Ovo de Páscoa Triplo Avelã 320g', preco: 99.99}
];

let conteudoProdutos = '';
produtos.forEach( function(produto){
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
    const carrinho = document.getElementById("container-carrinho");
    carrinho.style.display = 'flex';
};

function fecharCarrinho(){
    const carrinho = document.getElementById("container-carrinho");
    carrinho.style.display = 'none';
}

//const btnAbrir = document.getElementById('btnAbrir');
//btnAbrir.addEventListener('click', abrirCarrinho);

//const btnFechar = document.getElementById('btnFechar');
//btnFechar.addEventListener('click', fecharCarrinho)


