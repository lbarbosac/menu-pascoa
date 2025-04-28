
const produtos = [
    { imagem: 'img/ovo-sonho-de-valsa-sem-fundo.png', produto: 'Ovo de Páscoa Sonho de Valsa', preco: 59.90 },
    { imagem: 'img/ovo-bis-chocolate-sem-fundo.png', produto: 'Ovo de Páscoa Chocolate ao Leite', preco: 69.90 },
    { imagem: 'img/ovo-patrulha-canina-sem-fundo.png', produto: 'Ovo de Páscoa Patrulha Canina', preco: 79.90 },
    { imagem: 'img/ovo-ouro-branco-sem-fundo.png', produto: 'Ovo de Páscoa Ouro Branco 359g', preco: 89.90 },
    { imagem: 'img/ovo-tripla-camada-avela-sem-fundo.png', produto: 'Ovo de Páscoa Triplo Avelã 320g', preco: 99.99 }
];

const carrinhoCompras = new Array();
let conteudoProdutos = '';
let contador = 0;
produtos.forEach(function (produto) {
    conteudoProdutos += '<div class="caixa-produto"><img src="' + produto.imagem + '" alt=""><h1>' + produto.produto + '</h1><div id="caixa-produto2"><h2 id="preco"> R$ ' + produto.preco + '</h2><button onclick="adicionar('+contador+')"">Comprar</button></div></div>';
    contador++;
});

document.getElementById('container').innerHTML = conteudoProdutos;

function adicionar(item) {
    carrinhoCompras.push(produtos[item]);
    abrirCarrinho();
    console.log(carrinhoCompras);
};

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

const buttonComprar = document.querySelectorAll('#comprar');
buttonComprar.forEach(button => {
    button.addEventListener('click', function () {

        // percorre todos os elementos

        carrinhoCompras.forEach(adicionar(item) => {
            const carrinhoCompras = document.getElementById('main-carrinho');
            carrinhoCompras.innerHTML += `<div class="caixa-compra"><img src="${produtos.imagem}" alt="${produtos.produto}"><h1>${produtos.produto}</h1><button onclick="fecharCaixaDeCompra()" class="remover">X</button><div class="info-linha"><div class="contador"><button class="botoes-contador" class="diminuir" id="diminuir" -1>-</button><input type="text" value="1" class="quantidade" id="quantidade"><button class="botoes-contador" class="somar" id="somar" style="color: #28a745;">+</button></div><div class="soma-preco">${produtos.preco}</div></div></div>`
        });

        document.getElementById('main-carrinho').innerHTML = carrinhoCompras;

        // contador do carrinho 

        const diminuirButton = document.getElementById('diminuir');
        const somarButton = document.getElementById('somar');
        const quantidadeButton = document.getElementById('quantidade');

        let value = quantidadeButton.value;

        somarButton.addEventListener('click', () => {
            value = ++value;
            quantidadeButton.value = value;
        });

        diminuirButton.addEventListener('click', () => {
            if (value > 1) {
                value--;
                quantidadeButton.value = value;
            }
            else {
                alert('Você não pode diminuir mais! Clique no X para excluir produto');
            }
        });

        // aqui é para fazer a soma do preço

        const somaPreco = document.querySelector('.soma-preco');
        const preco = produtos[index].preco;
        let total = preco * value;
        somaPreco.innerHTML = `R$ ${total.toFixed(2)}`;
        quantidadeButton.addEventListener('input', () => {
            value = quantidadeButton.value;
            total = preco * value;
            somaPreco.innerHTML = `R$ ${total.toFixed(2)}`; // Deixa só ter duas casas decimais
        });
    });
});