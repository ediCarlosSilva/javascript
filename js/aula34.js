function teste() {
    alert("teste");
}

// função liberal
window.onload = function() {

    document.getElementById("l").onclick = function() {
        alert("teste");

    }
};