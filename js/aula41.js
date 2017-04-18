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

    var img = document.getElementsByTagName("img");
    //img[2].border = "6px";//DOM HTML API
    img[1].setAttribute("border", "6px"); //DOM CORE API

}