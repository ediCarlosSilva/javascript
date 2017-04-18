$.ajax({
    type: "GET",
    url: "http://localhost:36759/Aluno.svc/ListarAlunos",
    cache: false,
    contentType: "application/json",
    dataType: "json",
    success: function(data) {
        console.log(data);
    }
});