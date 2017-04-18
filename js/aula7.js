/*
    autor : Edi Carlos 
    descrição : declarações e estruturas
*/

var Carro = {
    marca: "Nissan",
    modelo: "350z",
    potencia: {
        cavalos: "350",
        velocidade: "320km/h"
    }
};

with(Carro.potencia) {
    alert(cavalos);
    alert(velocidade);
}

//alert(Carro.potencia.cavalos)


/*
var x = prompt("Informe numero maior que 10");
try {
    if (x < 10) {
        throw "numero menor que 10";
    }
    alert(x);

} catch (e) {
    alert(e);
}

var x = a;
var b = x + 10;
alert(b);
*/