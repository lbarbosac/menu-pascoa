
const produtos = [
    {imagem:'https://www.americanas.com.br/_next/image?url=https%3A%2F%2Famericanas.vtexassets.com%2Farquivos%2Fids%2F462397%2F1638790540_1SZ.jpg%3Fv%3D638796563477300000&w=1280&q=75', produto: 'Ovo de Páscoa Sonho de Valsa', preco: 59.90},
    {imagem: 'https://www.americanas.com.br/_next/image?url=https%3A%2F%2Famericanas.vtexassets.com%2Farquivos%2Fids%2F577302%2F7514250775_1SZ.jpg%3Fv%3D638796546541430000&w=1280&q=75', produto: 'Ovo de Páscoa Chocolate ao Leite', preco: 69.90},
    {imagem: 'https://www.americanas.com.br/_next/image?url=https%3A%2F%2Famericanas.vtexassets.com%2Farquivos%2Fids%2F408669%2F7087418610_1SZ.jpg%3Fv%3D638790693546970000&w=1280&q=75', produto: 'Ovo de Páscoa Patrulha Canina', preco: 79.90},
    {imagem: 'https://www.americanas.com.br/_next/image?url=https%3A%2F%2Famericanas.vtexassets.com%2Farquivos%2Fids%2F30046134%2F2893971989_1SZ.jpg%3Fv%3D638793881612100000&w=1280&q=75', produto: 'Ovo de Páscoa Ouro Branco 359g', preco: 89.90},
    {imagem: 'https://www.americanas.com.br/_next/image?url=https%3A%2F%2Famericanas.vtexassets.com%2Farquivos%2Fids%2F31256941%2F7622201676049_1%20-1-.jpg.jpg%3Fv%3D638798015736670000&w=1280&q=75', produto: 'Ovo de Páscoa Triplo Avelã 320g', preco: 99.99}
];

let conteudoProdutos = '';
produtos.forEach( function(produto){
    conteudoProdutos += '<div class="caixa-produto"><img src="'+produto.imagem+'" alt=""><h1>'+produto.produto+'</h1><div id="caixa-produto2"><h2 id="preco"> R$ '+produto.preco+'</h2><button>Comprar</button></div></div>';
});

document.getElementById('container').innerHTML = conteudoProdutos;

// aqui é para fazer funcionar o carrinho de compras.

const cesta = [
    
]