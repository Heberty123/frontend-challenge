var administrador = document.querySelector("#logado");
let logado = localStorage.getItem("logado");

console.log("Esta logado always ? " + logado);

if(logado == "true"){
    administrador.innerText = "Menu Administrador";
}
else{
    administrador.innerText = "Login";
}

function submitFormProduto(event){
    event.preventDefault();
    
    if(localStorage.getItem("logado") == "true"){

        /**  Quando Está Logado: faça operação do FORMULÁRIO SUBMIT      */

        const url = `http://localhost:3000/profile`;
        console.log(event.target);

        let campo_file = document.querySelector("#novo-produto-campo-file");
        let campo_nome = document.querySelector("#novo-produto-campo-name");
        let campo_preco = document.querySelector("#novo-produto-campo-preco");
        let campo_descricao = document.querySelector("#novo-produto-campo-descricao");  

        let leia = (e) => {


            const criaCliente = (imagem, nome, preco, categoria, descricao) => { 
                return fetch(url, {
                    method: 'POST', 
                    headers: {
                        'Content-Type' : 'application/json'
                    },
                    body: JSON.stringify({
                        imagem: imagem,
                        nome: nome,
                        preco: preco,
                        categoria: categoria,
                        descricao: descricao
                    })
                })
                .then( resposta => {
                    return resposta.body
                })
            }

            criaCliente("fica sem", campo_nome.value, campo_preco.value, "ainda não tem categoria no campo", campo_descricao.value);
            
        }


        leia();


    }
    else{
        document.querySelector(".modal-login-novoPro").classList.add("mostrar");
    }
}

/**     MODAL LOGIN NOVO PRODUTO !   */

document.querySelector(".modal-login-novoPro").addEventListener('click', e => {


    if(e.target.id == "modal-login" || e.target.id == "close-modal" || e.target.id == "nao-button"){
        document.querySelector(".modal-login-novoPro").classList.remove("mostrar");
    }

    if(e.target.id == "sim-button"){
        window.location.replace("file:///home/heberty/Documentos/Frontend-challenge/Loja/session/session.html");
    }
    
});

/**           */

