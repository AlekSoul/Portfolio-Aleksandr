$(document).ready(function(){
    $("#flip").click(function(){
        $("#panel").slideToggle("slow");
    });
});

$(document).ready(function(){
    $("form").submit(function(){
        alert("A mensagem foi enviada com sucesso! (Só que não)");
    });
});

$(document).ready(function(){
    $("button").click(function(){
        var grana = $("#grana");
        grana.animate({height: '10px'}, "slow");
        grana.animate({width: '10px'}, "slow");
        grana.animate({height: '450px'}, "slow");
        grana.animate({width: '450px'}, "slow");
    });
});
