/*
    autor : Edi Carlos 
    descrição : estudo dos operadores javaScript




*/
//operador ,(virgula = separa expressoes) var idade = 21, sexo = "masculino", nacionalidade = "brasileira";
// ternario: var x = (idade >= 18) ? "maior de idade" : "menor de idade";
/* delete - apaga operando
 */
function calcularIMC() {
    var formulario = document.getElementById("formulario");

    var kilos = parseInt(formulario.kilos.value);
    var metros = +formulario.metros.value;
    var centimetros = +formulario.centimetros.value;

    var altura = ((metros * 100) + centimetros) / 100;
    var imc = kilos / (altura * altura);

    formulario.imc.value = imc.toFixed(2);

    if (imc < 20) {
        alert("Abaixo do peso");
    } else if (imc >= 20 && imc < 25) {
        alert("Peso Ideal");
    } else if (imc >= 25 && imc < 30) {
        alert("Sobrepeso");
    } else if (imc >= 30 && imc < 35) {
        alert("Obesidade Moderada");
    } else if (imc >= 35 && imc < 40) {
        alert("Obesidade Severa");
    } else if (imc >= 40 && imc < 50) {
        alert("Obesidade MOrbida");
    } else {
        alet("Super Obesidade");
    }

}