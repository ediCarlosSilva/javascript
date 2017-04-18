window.onload = function() {


    var tit = document.getElementById("tit_id");
    //tit = document.getElementsByName("tit_name");
    //tit = document.getElementsByClassName("tit_class");
    //tit = document.getElementsByTagName("h2");
    tit = document.querySelector("#tit_id");
    //alert(tit);

    tit.innerHTML = "outro Texto no titulo!";

    //tit.style.color = "#0000ff"; // DOM HTML API
    tit.setAttribute("style", "color:#0000ff"); //DOM CORE API

    //var img = document.getElementsByTagName("img");
    //img[2].border = "6px";//DOM HTML API
    //img[1].setAttribute("border", "6px"); //DOM CORE API

    /* Coleções de Elementos */
    var img = document.images;
    for (var i = 0; i < img.length; i++) {
        //alert(img[i].src);
    }
    //alert(document.images.length);
    //alert(img[0]);
    //alert(img.item(0));
    //alert(img.namedItem("selecionada"));
    //document.links[2].alt = "titulo";
    //alert(document.links[2].alt);
    //alert(document.forms.length);



}