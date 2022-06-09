const lista = $("#lista");

$("#boton").click(function () {
    lista.empty();
    $.get("http://localhost:5000/amigos", function (data, status) {
        if (status === 'success') {
            data.forEach(element => lista.append(
                '<li>' + element.name + '</li>'
            ));
        }
    });
});

$("#search").click(function () {
    var id = $("#input").val();

    $.get(`http://localhost:5000/amigos/${id}`, function (data, status) {
        if (status === 'success') {
            $("#amigo").text(data.name);
        }
    });
});


$("#delete").click(function () {
    var id = $("#inputDelete").val();
    $.ajax({
        url: `http://localhost:5000/amigos/${id}`,
        type: 'DELETE',
        success: function (result) {
            $("#sucess").text('amigo borrado con exito');
        }
    });
});