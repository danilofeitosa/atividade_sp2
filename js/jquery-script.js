//efeito de esconder formulário de cadastro
$(document).ready(function(){

    //document.getElementById("botao-cadastrar").click() - Javascript
    $("#botao-cadastrar").click(function() {
        $("#form-cadastrar").slideToggle("slow");
        // $("#form-cadastrar").show("slow");
        // $("#form-cadastrar").hide("slow");
        $("#section-login").slideToggle("slow");
        $("botao-cadastrar").hide();
    });

})