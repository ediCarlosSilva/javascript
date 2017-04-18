/*
    autor : Edi Carlos 
    descrição : script para localização de poltronas disponiveis
*/
window.onload = function() {

    document.getElementById("xti").onclick = ligar;
    setInterval(apresentaHoras, 1000);

}

function ligar() {
    document.getElementById("xti").src = "img/xlmap_on.jpg";
    //setTimeout("desligar()", 3000);
    setTimeout(desligar, 3000);

}

function desligar() {
    document.getElementById("xti").src = "img/xlmap_off.jpg";
}

function apresentaHoras() {
    var agora = new Date();
    var horas = agora.getHours() + ":" + agora.getMinutes() + ":" + agora.getSeconds();
    document.getElementById("horas").innerHTML = horas;
}