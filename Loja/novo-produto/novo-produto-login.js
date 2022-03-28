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

