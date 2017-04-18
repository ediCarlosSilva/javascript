/*
    autor : Edi Carlos 
    descrição : script para localização de poltronas disponiveis
*/
window.onload = function() {

    document.getElementById("xti").onclick = ligar;
    setInterval(apresentaHoras, 1000);

    var nome = readCookie("nome");
    if (nome == null) {
        nome = prompt("qual é o seu nome?");
        writeCookie("nome", nome, 1);
    }


}

function ligar() {
    document.getElementById("xti").src = "img/xlmap_on.jpg";
    //setTimeout("desligar()", 3000);
    //setTimeout(desligar, 3000);
    var nome = readCookie("nome");
    if (nome != null) {
        alert("É bom estar com você " + nome);
    }

    setTimeOut(desligar, 3000);

}

function desligar() {
    document.getElementById("xti").src = "img/xlmap_off.jpg";
}

function apresentaHoras() {
    var agora = new Date();
    var horas = agora.getHours() + ":" + agora.getMinutes() + ":" + agora.getSeconds();
    document.getElementById("horas").innerHTML = horas;
}