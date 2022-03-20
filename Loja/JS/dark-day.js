/*

window.matchMedia('(prefers-color-scheme: dark)').addListener(function (e) {
    console.log(`changed to ${e.matches ? "dark" : "light"} mode`)
  });


console.log(window.matchMedia('prefers-color-sheme'));

*/




/*

let variavel = document.querySelector(':root');

variavel.style.setProperty('--background-fundo', '#000000');

*/

window.matchMedia('(prefers-color-scheme: dark)').matches

if (window.matchMedia && 
    window.matchMedia('(prefers-color-scheme: dark)').matches) {
    console.log("Noite");
}
else{
    console.log("dia");
}


var input_night = document.querySelector("#input-power");


input_night.addEventListener('click', e => {
    if(input_night.checked==true){
        console.log("Está checkado");
    }else{
        console.log("Não está checkado");
    }
});


