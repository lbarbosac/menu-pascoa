
const produtos = [
    {id: 1, imagem: 'img/ovo-sonho-de-valsa-sem-fundo.png', produto: 'Ovo de Páscoa Sonho de Valsa', preco: 59.90},
    {id: 2, imagem: 'img/ovo-bis-chocolate-sem-fundo.png', produto: 'Ovo de Páscoa Chocolate ao Leite', preco: 69.90},
    {id: 3, imagem: 'img/ovo-patrulha-canina-sem-fundo.png', produto: 'Ovo de Páscoa Patrulha Canina', preco: 79.90},
    {id: 4, imagem: 'img/ovo-ouro-branco-sem-fundo.png', produto: 'Ovo de Páscoa Ouro Branco 359g', preco: 89.90},
    {id: 5, imagem: 'img/ovo-tripla-camada-avela-sem-fundo.png', produto: 'Ovo de Páscoa Triplo Avelã 320g', preco: 99.99}
];

let carrinhoLista = []

let conteudoProdutos = '';
let contador = 0;
produtos.forEach(function(produto){
    conteudoProdutos += `
        <div class="caixa-produto"><img src="${produto.imagem}" alt="">
            <h1>${produto.produto}</h1>
            <div id="caixa-produto2">
                <h2 id="preco"> R$ ${produto.preco}</h2>
                <button onclick="adicionarProdutoNoCarrinho(${produto.id})" id="button-comprar" data-value-contador="${contador}">Comprar</button>
            </div>
        </div>
    `
    contador++;
});

document.getElementById('container').innerHTML = conteudoProdutos;

const removerProdutoButton = document.getElementById('remover-produto');
const adicionarProdutoButton = document.getElementById('adicionar-produto');
const quantidadeProdutoButton = document.getElementById('quantidade-produto');
 
let value = quantidadeProdutoButton.value;

adicionarProdutoButton.addEventListener('click',() => {
    value = ++value;
    quantidadeProdutoButton.value = value;
});
 
removerProdutoButton.addEventListener('click',() => {
    if (value > 0){
        value--;
        quantidadeProdutoButton.value = value;
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

function removerProdutoDoCarrinho() {
    const removerProdutoDoCarrinho = document.getElementById('produto-carrinho');
    removerProdutoDoCarrinho.style.display = 'none';
};

function adicionarProdutoNoCarrinho(idProduto) {
    console.log('produto tal adiconado ', idProduto);
    
    const produtoSelecionado = produtos.find(p => p.id === idProduto);
    if (!produtoSelecionado) {
      console.warn(`Produto com id ${idProduto} não encontrado.`);
      return;
    }

    // Verifica se o produto já está no carrinho (comparando pelo id)
    const indexNoCarrinho = carrinhoLista.findIndex(p => p.id === idProduto);
    
    if (indexNoCarrinho === -1) {
        // Produto não está no carrinho, adiciona o objeto completo
        carrinhoLista.push(produtoSelecionado);
        console.log(`Produto ${produtoSelecionado.nome} adicionado ao carrinho.`);
    } else {
        // Produto já está no carrinho
        console.warn(`Produto ${produtoSelecionado.nome} removido do carrinho.`);
    }

    // Exibe o estado atual do carrinho
    console.log("Carrinho atual:", carrinhoLista);

}