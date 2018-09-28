$.validator.setDefaults( {
    submitHandler: function () {
        alert( "Cadastrado!" );
        location.reload();
    }
} );

$(document).ready(function () {
    /* VALIDAR CAMPOS */
    $("#cadastrarPessoas").validate({
        highlight: function (element, errorClass, validClass) {
            $(element).addClass("has-error").removeClass("has-success");
        },
        unhighlight: function (element, errorClass, validClass) {
            $(element).addClass("has-success").removeClass("has-error");
        }
    });

    /* MASCARAS */
    $('#inputCEP').mask("00000-000", {placeholder: "_____-___"});
    $('#inputCPF').mask("000.000.000-00", {placeholder: "___.___.___-__"});
    $('#inputTelefone').mask("(00) 0000-0000", {placeholder: "(__) ____-____"});

    /* FILTRO DE PESSOAS */
    $("#input-busca").on("keyup", function () {
        var value = $(this).val().toLowerCase();
        $("#pessoas-table tr").filter(function () {
            $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
        });
    });
});

