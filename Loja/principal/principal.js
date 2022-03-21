var administrador = document.querySelector("#logado");
let logado = localStorage.getItem("logado");

console.log("Esta logado always ? " + logado);

if(logado){
    administrador.innerText = "Menu Administrador";
}
else{
    administrador.innerText = "Login";
}