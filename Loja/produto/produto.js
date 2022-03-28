var administrador = document.querySelector("#logado");
let logado = localStorage.getItem("logado");

console.log("Esta logado always ? " + logado);

if(logado == "true"){
    administrador.innerText = "Menu Administrador";
}
else{
    administrador.innerText = "Login";
}
