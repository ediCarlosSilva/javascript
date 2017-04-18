window.onload = function() {

    var h2 = document.getElementsByTagName("h2").item(0);


    // alert(div.childNodes.item(0).nodeName);

    // var hr = document.createElement("hr");
    // div.appendChild(hr);



    var li = document.createElement("li");

    li.appendChild(document.createTextNode("teste de insercao de lista"));

    div.firstChild.appendChild(li);

    var atributo = document.createAttribute("style");
    atributo.value = "color:blue";
    h2.setAttributeNode(atributo);

}