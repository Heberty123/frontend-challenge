var administrador = document.querySelector("#logado");
let logado = localStorage.getItem("logado");

console.log("Esta logado always ? " + logado);

if(logado == "true"){
    administrador.innerText = "Menu Administrador";
}
else{
    administrador.innerText = "Login";
}


/*  Make a Credit Card Payment Form Using HTML */

document.querySelector("#nome").oninput = () => {
    document.querySelector('.name-card-people').innerText = document.querySelector('#nome').value;
}

document.querySelector("#number").oninput = () => {
    document.querySelector('.number-card').innerText = document.querySelector('#number').value;
}

document.querySelector("#day").oninput = () => {
    document.querySelector('.campo-data-day').innerText = document.querySelector('#day').value;
}

document.querySelector("#month").oninput = () => {
    document.querySelector('.campo-data-month').innerText = document.querySelector('#month').value;
}

document.querySelector("#month").oninput = () => {
    document.querySelector('.campo-data-month').innerText = document.querySelector('#month').value;
}

document.querySelector("#csv").onmouseenter = () => {
    document.querySelector('.adquire-credit-card').style.transform = 'perspective(1000px) rotateY(-180deg)';
    document.querySelector('.credit-card-back').style.transform = 'perspective(1000px) rotateY(0deg)'; 
    document.querySelector('.input-card-back-cvv').innerText = document.querySelector('#csv').value;
}

document.querySelector("#csv").oninput = () => {
    document.querySelector('.input-card-back-cvv').innerText = document.querySelector('#csv').value;
}

document.querySelector("#csv").onmouseleave = () => {
    document.querySelector('.adquire-credit-card').style.transform = 'perspective(1000px) rotateY(0deg)';
    document.querySelector('.credit-card-back').style.transform = 'perspective(1000px) rotateY(180deg)'; 
    document.querySelector('.input-card-back-cvv').innerText = document.querySelector('#csv').value;
}