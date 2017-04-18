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