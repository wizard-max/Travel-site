$(document).ready(function () {
    $('#sidebarCollapse').on('click', function () {
        $('#sidebar').toggleClass('active');
    });
});


$(document).ready(function () {
        caricaContenuto("c1.html");
        $("input.cambiacontenuto").click(function () {
            caricaContenuto($(this).attr("data-pagina"));
        });
    });

    function caricaContenuto(pagina) {
        $.get(pagina, function (response) {
            $("#risultato").html(response);
        });
    }