/*
    função : ligar()
    autor : Edi Carlos 
    descrição : apresenta o nome do usuário e liga a lampada

*/

function ligar() {

    var nome = prompt("Qual o seu nome?");

    alert("Prazer em conhecer você " + nome);

    document.getElementById("xti").src = "img/xlmap_on.jpg";
}