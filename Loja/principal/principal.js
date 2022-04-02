
var administrador = document.querySelector("#logado");
let logado = localStorage.getItem("logado");

console.log("Esta logado always ? " + logado);

if(logado == "true"){
    administrador.innerText = "Menu Administrador";
}
else{
    administrador.innerText = "Login";
}



/*  textos automaticos  */

var p = document.querySelectorAll(".pre-box-info");

var array = new Map();
var contador = 1; 
var i = 0;

array.set(1, "adquira cartao já");
array.set(2, "cartão gratis");
array.set(3, "Nada de dificil");
array.set(4, "É muito facil");
array.set(5, "obtenha descontos");
array.set(6, "Venha sempre");



function retorno(texto){
    for(i = 0; i < texto.length; i++){
        p[i].innerText = texto[i];
    }
}

function eraser(){
    for(i = 0; i < p.length; i++){
        p[i].innerText = "";
    }
}


setInterval(tempoAntigido, 1000*2);


function tempoAntigido(){
        
        if(contador == 1){
            eraser();
            retorno(array.get(1));
            
        }
        else if(contador == 2){
            eraser();
            retorno(array.get(2));

        }

        else if(contador == 3){
            eraser();
            retorno(array.get(3));

        }

        else if(contador == 4){
            eraser();
            retorno(array.get(4));

        }

        else if(contador == 5){
            eraser();
            retorno(array.get(5));

        }

        else{
            eraser();
            retorno(array.get(6));
            contador = 0;
        }
        contador = contador + 1;
}


/**     JSON-SERVER listar produtos     */

const listaClientes = () =>  {
    return fetch(`http://localhost:3000/profile`)
    .then(resposta => {
        return resposta.json()
    })
}


const criaLista = (imagem, nome, preco, categoria, descricao) => {

    const novoArticleProduto =  document.createElement('article')

    const conteudo = `

        <h1 class="title-starwars">Star Wars<a href="../Produtos-home/produtos-home.html" class="ver-tudo">Ver tudo <img src="../imagem/imagens-index/Vector-seta.svg" alt=""></a></h1>
        <ul class="lista">
            <li class="item">
                <img src="../imagem/produtos/unsplash_6FDXGY9J6y4.png" alt="">
                <h2 class="t-iList">Produto</h2>
                <p class="p-p-Prod">R$ 60,00</p>
                <a href="../produto/produto.html">Ver produto</a>
            </li>
            <li class="item">
                <img src="../imagem/produtos/darth-vader.png" alt="">
                <h2 class="t-iList">Produto</h2>
                <p class="p-p-Prod">R$ 60,00</p>
                <a href="">Ver produto</a>
            </li>
            <li class="item">
                <img src="../imagem/produtos/yoda.png" alt="">
                <h2 class="t-iList">Produto</h2>
                <p class="p-p-Prod">R$ 60,00</p>
                <a href="">Ver produto</a>
            </li>
            <li class="item">
                <img src="../imagem/produtos/boneco.png" alt="">
                <h2 class="t-iList">Produto</h2>
                <p class="p-p-Prod">R$ 60,00</p>
                <a href="">Ver produto</a>
            </li>
            <li class="item">
                <img src="../imagem/produtos/babyyoda.png" alt="">
                <h2 class="t-iList">Produto</h2>
                <p class="p-p-Prod">R$ 60,00</p>
                <a href="">Ver produto</a>
            </li>
            <li class="item">
                <img src="../imagem/produtos/vilaoskywalker.png" alt="">
                <h2 class="t-iList">Produto</h2>
                <p class="p-p-Prod">R$ 60,00</p>
                <a href="">Ver produto</a>
            </li>
        </ul>

    `
}



