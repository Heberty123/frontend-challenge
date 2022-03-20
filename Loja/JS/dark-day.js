let variavel = document.querySelector(':root');
var imgScheme = document.querySelector('.imgModeScheme');
var input_night = document.querySelector("#input-power");




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



input_night.addEventListener('click', e => {
    if(input_night.checked==true){


        input_night.checked = true;
        imgScheme.src = "../imagem/imagens-index/owl-svgrepo-com.svg"
        imgScheme.alt = "Coruja";
        localStorage.setItem('night', true); 
        
      
       forNight();

    }else{

        
        input_night.checked = false;
        imgScheme.src = "../imagem/imagens-index/sunflower-svgrepo-com (1).svg";
        imgScheme.alt = "Girassol";
        localStorage.setItem('night', false);   

        forLight();
    }
});



/*
window.matchMedia('(prefers-color-scheme: dark)').addListener(function (e) {
    console.log(`changed to ${e.matches ? "dark" : "light"} mode`)
    if(e.matches){
        console.log("Mudou para noite");
        console.log(e.matches);    
        input_night.checked = true;
        forNight();
        

    }
    else{
        console.log("Mudou para dia");
        console.log(e.matches);  
        input_night.checked = false;
        forLight();
    }
  });

*/

//var checked = JSON.parse(localStorage.getItem(night));

console.log(localStorage);

if(localStorage.getItem('night') == null){
    console.log("vazio");
}
else{

    console.log("Encontrado");
    let checked = JSON.parse(localStorage.getItem('night'));
    input_night.checked = checked;
    if(checked){
        forNight();
        imgScheme.src = "../imagem/imagens-index/owl-svgrepo-com.svg"
        imgScheme.alt = "Coruja";
        window.history.pushState({'input_night': checked}, 'night', new URL(window.location));
        console.log(window.history);
    }
    else{
        forLight();
        imgScheme.src = "../imagem/imagens-index/sunflower-svgrepo-com (1).svg";
        imgScheme.alt = "Girassol";
        window.history.pushState({'input_night': checked}, 'night', new URL(window.location));
        console.log(window.history);
    }
}

let checkehistory = window.history.state;

if(checkehistory.input_night){
    input_night.checked = true;
    console.log("Foiiii truee");
}
else{
    input_night.checked = false;
    
    console.log("Foiiiii falsee");
}


/*

if(checked){
    input_night.checked = true;
}
else{
    input_night.checked = false;
}

*/

