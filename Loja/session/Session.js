var administrador = document.querySelector("#logado");
var form_login = document.querySelector(".container-login");
var section_logado = document.querySelector(".container-session-logado");
var title_user = document.querySelector(".title-user-connect");
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

    if(login){
        /* deu certo login */

        administrador.innerText = "Menu Administrador";
        title_user.innerText = usuario;
        localStorage.setItem("logado", true);


    }
    else{
        /* Login inválido */

        localStorage.setItem("logado", false);
    }
}


/*   FUNÇÃO DO BUTTON DE DESLOGAR A CONTA CONECTADA NO SITE INTEIRO     */

function Deslogar(event){
    localStorage.removeItem("logado");
}


/*  VERIFICA SE ESTÁ LOGADO OU NÃO  */

let logado = localStorage.getItem("logado");

console.log("Esta logado always ? " + logado);

if(logado){
    administrador.innerText = "Menu Administrador";
    form_login.classList.add("form-login-none");
    section_logado.classList.add("logado-ativo");
}
else{
    form_login.classList.remove("form-login-none");
    section_logado.classList.remove("logado-ativo");
}
