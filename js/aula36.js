/*
    autor : Edi Carlos 
    descrição : script para localização de poltronas disponiveis
*/
window.onload = function() {

    var btn = document.getElementById("botao");
    btn.onclick = function(e) {

        var oEvento = e ? e : window.event;
        alert(e.clientX);

    }



}

function um() {
    alert("um");
}

function dois() {
    alert("dois");
}

















// window.onload = function() {

//     document.getElementById("texto").focus();

//     var btn = document.getElementById("botao");

//     btn.onclick = function(e) {
//         value(this.id);
//         document.getElementById("texto").onblur();
//     }

//     document.getElementById("texto").onblur = function(e) {
//         alert(this.value);
//     }


// }