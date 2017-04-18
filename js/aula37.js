/*
    autor : Edi Carlos 
    descrição : script para localização de poltronas disponiveis
*/
window.onload = function() {

    //prompt("qual a tecnologia que voce Mais gosta?");
    // window.open("aula3.html", "xti", "width=300, height=500, toolbar=no, location=no");
    //window.resizeTo(300, 300);
    //window.moveTo(300, 300);

    var plugins = navigator.plugins;
    var p = "";
    for (var i = 0; i < plugins.length; i++) {
        p += plugins[i].name + "\n";
    }
    alert(p);

}