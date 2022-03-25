let variavel = document.querySelector(':root');
var button = document.querySelector(".button-night");
var box_night = document.querySelector(".box-night");



window.matchMedia('(prefers-color-scheme: dark)').matches

if (window.matchMedia && 
    window.matchMedia('(prefers-color-scheme: dark)').matches) {
    console.log("Noite");

}
else{
    console.log("dia");
}


function forNight(){
    variavel.style.setProperty('--title-blue', '#2A7AE4');
    variavel.style.setProperty('--background-fundo', '#181616');
    variavel.style.setProperty('--background-input', '#575454');
    variavel.style.setProperty('--shadow-input-login', '#5e5050');
    variavel.style.setProperty('--background-input-checkbox', '#649ae0');
    variavel.style.setProperty('--title-white', '#504b4b');
    variavel.style.setProperty('--title-preto', '#FFFFFF');
    variavel.style.setProperty('--title-item-produto', '#e4d7d7');
    variavel.style.setProperty('--background-azul-footer', '#272e36');
    variavel.style.setProperty('--back-input-footer', '#4d3e3e')
    variavel.style.setProperty('--background-white-footer', '#000000');
    variavel.style.setProperty('--text-sessao-input', '#e0d0d0');
    variavel.style.setProperty('--title-title-dagg', '#584e4e');
}

function forLight(){
    variavel.style.setProperty('--title-blue', '#2A7AE4');
    variavel.style.setProperty('--background-fundo', '#E5E5E5');
    variavel.style.setProperty('--background-input', '#F5F5F5');
    variavel.style.setProperty('--shadow-input-login', '#C8C8C8');
    variavel.style.setProperty('--background-input-checkbox', '#649ae0');
    variavel.style.setProperty('--title-white', '#FFFFFF');
    variavel.style.setProperty('--title-preto', '#000000');
    variavel.style.setProperty('--title-item-produto', '#464646');
    variavel.style.setProperty('--background-azul-footer', '#EAF2FD');
    variavel.style.setProperty('--back-input-footer', '#FFFFFF')
    variavel.style.setProperty('--background-white-footer', '#FFFFFF');
    variavel.style.setProperty('--text-sessao-input', '#A2A2A2');
    variavel.style.setProperty('--title-title-dagg', '#6B6B6B');
}

button.addEventListener('click', e => {
    button.classList.toggle("night-click");
    box_night.classList.toggle("box-night-back");

    if(button.classList.contains("night-click")){
        localStorage.setItem("ativo-morning", "false");
        forNight();
    }
    else{
        localStorage.setItem("ativo-morning", "true");
        forLight();
    }
});

var teste = localStorage.getItem("ativo-morning");

if(teste == "true"){
    console.log("Depois do reload ficou dia");
    button.classList.remove("night-click");
    box_night.classList.remove("box-night-back");
    forLight();
}
else if(teste == "false"){
    console.log("Depois do reload ficou noite");
    button.classList.add("night-click");
    box_night.classList.add("box-night-back");
    forNight();
}

//var checked = JSON.parse(localStorage.getItem(night));


