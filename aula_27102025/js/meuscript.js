function exibir(){
    document.getElementById('texto').innerHTML = 'Seu mouse está sobre o texto';
}

function ocultar(){
    document.getElementById('texto').innerHTML = '';
}

// Crie uma nova seção no HTML
/*
Desenvolva um botão que ao receber um clique mude a cor de um ou mais elementos
*/

function mudaCor(){ //mudar p preto se azul e p azul se preto
    let cor = document.getElementById('cor').style.color;
    if(cor == 'black'){
        document.getElementById('cor').style.color = 'blue';
    } else {
        document.getElementById('cor').style.color = 'black';
    }
}

function ligar(){
    document.getElementById('lamp').src = 'img/pic_bulbon.gif';

}

function desligar(){
    document.getElementById('lamp').src = 'img/pic_bulboff.gif';
}

function onoff(){
    let estado = document.getElementById('lamp2').src;
    
    if(estado.includes("pic_bulboff.gif")){
        document.getElementById('lamp2').src = 'img/pic_bulbon.gif';
    } else {
        document.getElementById('lamp2').src = 'img/pic_bulboff.gif';
    }
}