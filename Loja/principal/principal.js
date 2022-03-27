var administrador = document.querySelector("#logado");
let logado = localStorage.getItem("logado");

console.log("Esta logado always ? " + logado);

if(logado){
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


