var administrador = document.querySelector("#logado");
var form_login = document.querySelector(".container-login");
var section_logado = document.querySelector(".container-session-logado");
var title_user = document.querySelector(".title-user-connect");
var box_erro = document.querySelector(".box-erro-login");
var box_erro_h2 = document.querySelector(".box-erro-login h2");
var box_erro_h3 = document.querySelector(".box-erro-login h3");
var button_deslogar = document.querySelector(".button-deslogar");
var account = new Login();



/*   QUANDO O USUÁRIO FAZ SUBMIT DO FORMULARIO LOGIN E VERIFICAR SE ESTÁ CORRETO O USU E SENHA DA CONTA !    */


function foiLogado(event){
    event.preventDefault();
    let usuario = document.querySelector(".input-email").value;
    let senha = document.querySelector(".input-senha").value;
    console.log("Vc digitou usuario: " + usuario);
    console.log("Vc digitou senha: " + senha);
    let login = account.logar(usuario, senha);

    if(login == true){
        /* deu certo login */

        administrador.innerText = "Menu Administrador";
        title_user.innerText = usuario;
        localStorage.setItem("logado", "true");
        window.location.replace("file:///home/heberty/Documentos/Frontend-challenge/Loja/novo-produto/novo-produto.html");
    }
    else if(login == null){

        box_erro.style.display = "block";
        box_erro_h2.innerText = "Todos os campos estão";
        box_erro_h3.innerText = "vazios";
    }
    else if(login == "usuario"){

        box_erro.style.display = "block";
        box_erro_h2.innerText = "campo usuário está";
        box_erro_h3.innerText = "vazio"
    }
    else if(login == "senha"){

        box_erro.style.display = "block";
        box_erro_h2.innerText = "campo senha está";
        box_erro_h3.innerText = "vazio"
    }
    else{
        /* Login inválido */
        box_erro.style.display = "block";
        box_erro_h2.innerText = "usuário ou senha";
        box_erro_h3.innerText = "inválido";
        localStorage.setItem("logado", "false");
    }
}


/*   FUNÇÃO DO BUTTON DE DESLOGAR A CONTA CONECTADA NO SITE INTEIRO     */

function Deslogar(event){
    localStorage.removeItem("logado");
    window.location.replace("file:///home/heberty/Documentos/Frontend-challenge/Loja/session/session.html");
}


/*  VERIFICA SE ESTÁ LOGADO OU NÃO  */

let logado = localStorage.getItem("logado");

console.log("Esta logado always ? " + logado);

if(logado == "true"){
    administrador.innerText = "Menu Administrador";
    form_login.classList.add("form-login-none");
    section_logado.classList.add("logado-ativo");
}
else{
    form_login.classList.remove("form-login-none");
    section_logado.classList.remove("logado-ativo");
}
