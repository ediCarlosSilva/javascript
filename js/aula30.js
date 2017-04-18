/*
    autor : Edi Carlos 
    descrição : Objetos JavaScript
*/
var dias = ["domingo", "segunda", "terça", "quarta", "quinta", "sexta", "sábado"];
var mes = ["janeiro", "fevereiro", "março", "abril", "maio", "junho", "julho", "agosto", "setembro", "outubro", "novembro", "dezembro"];
var data = new Date("Jul/20/2014 4:30:20");

data.setFullYear(2016)

alert(data.toLocaleDateString());

//alert(Date.parse(data));

//alert(data.getTimezoneOffset());

//alert(data.getTime());
//alert(data.getSeconds());
//alert(mes[data.getMonth()]);
//alert(data.getMinutes());
//alert(data.getMilliseconds());
//alert(data.getHours());//horas
//alert(data.getFullYear());//ano com 4 digitos
//alert(dias[data.getDay()]); //dia da semana
//alert(data.getDate());//dia do mes