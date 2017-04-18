//var regex = new RegExp("Javascript", "i");
//var regex = /Javascript/i
//var string = "JavaScript";
//alert(regex.test(string));
/* FUNÇÕES + MODIFICADORES */
//var str = "Qual é o Doce mais doce que o doce?";
//alert(/doce/ig.exec(str));
//alert(str.match(/doce/ig));

/* METACARACTERES */
//alert(/./.test("Pier"));// encontra a ocorrencia de qualquer caracter com exceção de novas linhas
//alert(/\w/.test("Pier21"));//procurar por qq caracter de a a Z de 0 a 9 e _(underline)
//alert(/\s/.test("Pier 21"));//procura a ocorrencia de espaços no texto
//alert(/\d/.test("Pier"));//procura por digitos
//alert(/\^21/.test("Pier21"));//indica a ocorrencia de uma determinada informação, no inicio da string
//alert(/21$/.test("Pier21"));//procura a ocorrencia desse padrão no final do texto
//alert(/\d$/.test("Pier21"));//verifica ocorrencia de um digito no final de texto
//alert(/\d\d$/.test("Pier21"));//verifica a ocorrencia de 2 digitos no final do texto
//alert(/\d\d\d$/.test("pier21"));//verifica a ocorrencia de 3 ...

/* verificar um padrão de cep
alert(/^\d\d\d\d\d-\d\d\d$/.test("70294-0703"));
*/

/* QUANTIFICADORES DAS EXPRESSÔES REGULARES */
//alert(/\d*/.test("Pier"));// 0 ou mais ocorrencias de digitos
//alert(/\d+/.test("Pier"));//pelo menos uma ocorrencia ou mais
//alert(/\d{3}/.test("Pier22"));//procua a quantidade de ocorrencia informa entre chaves{}
//alert(/\d{2}$/.test("Pier21"));//procua a ocorrencia de 2 digitos no final da string

/* validando cep com quantificadores e metacaracteres*/
//alert(/^\d{5}-\d{3}$/.test("70294-070"));

/* validação para datas */
//alert(/^\d{2}\/\d{2}\/\d{4}$/.test("12/02/1980"));
//alert(/^\d{2}\/\d{2}\/\d{2,4}$/.test("12/02/1980"));//no final no minimo 2 digitos e no maximo 4
//alert(/\w+@\w+\.\w{2,3}/.test("rh@xtiuniversity.com.br"));

/* CARACTERES OPCIONAIS */
// cau e ceu
//alert(/cau/.test("ceu"));
//alert(/c[ae]u/.test("ceu"));//tanto (a com e) pode ocorre no meio;
//alert(/\d/.test("2"));
//alert(/\d[\d\.]*/.test("23.45"));

/* BUSCAS E SUBSTITUIÇÕES */
//var str = "Qual é o Doce mais doce que o doce?";
//alert(str.match(/doce/ig));//i para ignorar maiuscula e minuscula | g para procurar em toda a string
//alert(str.replace(/doce/ig, "DOCINHO"));

//var str = "O rato roeu a roupa do rei de roma.";
//alert(str.match(/r[a-z]/ig));
//alert(str.replace(/r[a-z]/ig, "XXX"));

var url = "www.xti.com.br/clientes-2011.html";
//    "http://www.xti.com.br/2011/clientes.jsp";
var re = /www.xti.com.br\/\w{2,}-\d{4}\.html/;
alert(re.test(url));

re = /(www.xti.com.br)\/(\w{2,})-(\d{4})\.html/;
alert(url.replace(re, "http://$1/$3/$2.jsp"));