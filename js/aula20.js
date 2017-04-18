/*
    autor : Edi Carlos 
    descrição : Objetos JavaScript
*/

window.onload = function() {

    document.getElementById("botao").onclick = function() {
        //status = 200, statusText=OK, responseText, responseXML
        requisitar("ajax/arquivo.xml");
        return false;
    }

    function carregando(c) {
        while (c.hasChildNodes()) {
            c.removeChild(c.lastChild);
        }
        var img = document.createElement("img");
        img.setAttribute("src", "ajax/ajax.gif");
        c.appendChild(img);
    }

    function mostrar(ajax) {
        var r = document.getElementById("resposta");
        while (r.hasChildNodes()) { r.removeChild(r.lastChild); }


        var xml = new XML(ajax.responseText);
        //var url = xml.getElementsByTagName("url")[0].firstChild.nodeValue;
        r.appendChild(document.createTextNode(xml.url));
    }

    function requisitar(url) {
        var ajax = iniciaAjax();
        carregando(document.getElementById("resposta"));

        ajax.onreadystatechange = function() {
            if (ajax.readyState == 4) {
                //alert(ajax.responseText);
                //r.appendChild(document.createTextNode(ajax.responseText));
                //r.innerHTML = ajax.responseText;
                //r.innerHTML = ajax.responseText;

                mostrar(ajax);

            }
        }
        ajax.open("POST", url);
        ajax.send(null);
    }

    function iniciaAjax() {
        var ajax = null;
        if (window.XMLHttpRequest) {
            ajax = new XMLHttpRequest();

        } else if (window.ActiveXObject) {
            try {
                ajax = new ActiveXObject("Msxml2.XMLHTTP")
            } catch (e) {
                ajax = new ActiveXObject("Microsoft.XMLHTTP");
            }
        }
        return ajax;
    }
}