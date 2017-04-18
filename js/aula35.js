/*
    autor : Edi Carlos 
    descrição : script para localização de poltronas disponiveis
*/
//array indexados e mutidimensionais é criado com []
//array associativo cria-se utilizando chaves

//true = disponivel;
// false = indisponivel;
window.onload = function() {
    carregarPoltronas();

    var imagens = document.getElementsByTagName("img");
    for (var i = 0; i < imagens.length; i++) {
        imagens[i].onclick = verificarStatus(i);
    }

    /*
    document.getElementsByTagName("img")[0].onclick = function() { verificarStatus(0); };
    document.getElementsByTagName("img")[1].onclick = function() { verificarStatus(1); };
    document.getElementsByTagName("img")[2].onclick = function() { verificarStatus(2); };
    document.getElementsByTagName("img")[3].onclick = function() { verificarStatus(3); };
    document.getElementsByTagName("img")[4].onclick = function() { verificarStatus(4); };
    document.getElementsByTagName("img")[5].onclick = function() { verificarStatus(5); };
    document.getElementsByTagName("img")[6].onclick = function() { verificarStatus(6); };
    document.getElementsByTagName("img")[7].onclick = function() { verificarStatus(7); };
    document.getElementsByTagName("img")[8].onclick = function() { verificarStatus(8); };
    */

}

function verificarStatus(poltrona) {
    return function() {

        alert(document.getElementsByTagName("img")[poltrona].src);

        var src = document.getElementsByTagName("img")[poltrona].src;
        var msg = "";
        if (src.indexOf("ball_disponivel.jpg") > 0) {
            alert(src);
            alert(src.indexOf("ball_diponivel"));
            msg = "Poltrona disponível";
        } else if (src.indexOf("ball_indisponivel.jpg") > 0) {
            alert(src);
            alert(src.indexOf("ball_indiponivel\.jpg"));
            msg = "Poltrona Indisponível";
        } else {
            alert(src.indexOf("ball_selecionada.jpg"));
            msg = "Esta poltrona é Sua !!!";
        }
        alert(msg);
    }
}

var poltronas = [false, true, false, true, true, true, false, true, false];

function carregarPoltronas() {
    var imagens = document.getElementsByTagName("img");
    for (var i = 0; i < imagens.length; i++) {
        if (poltronas[i]) {
            imagens[i].src = "img/ball_disponivel.jpg";
        } else {
            imagens[i].src = "img/ball_indisponivel.jpg";
        }
    }
}

function selecionarPoltrona() {
    var imagens = document.getElementsByTagName("img");
    for (var i = 0; i < poltronas.length; i++) {
        if (poltronas[i]) {
            imagens[i].src = "img/ball_selecionada.jpg";

            var quer = confirm("Você quer está poltrona?");
            if (quer) {
                break;
            } else {
                imagens[i].src = "img/ball_disponivel.jpg";
            }
        }
    }
}

function selecionarCasal() {
    var imagens = document.getElementsByTagName("img");
    for (var i = 0; i < poltronas.length; i++) {
        if (poltronas[i] && poltronas[i + 1]) {
            imagens[i].src = "img/ball_selecionada.jpg";
            imagens[i + 1].src = "img/ball_selecionada.jpg";

            var quer = confirm("Você quer está poltrona?");
            if (quer) {
                break;
            } else {
                imagens[i].src = "img/ball_disponivel.jpg";
                imagens[i + 1].src = "img/ball_disponivel.jpg";
            }
        }
    }
}