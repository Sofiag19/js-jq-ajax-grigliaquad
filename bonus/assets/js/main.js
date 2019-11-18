// Griglia 6x6, ad ogni click parte una richiesta AJAX che prende un numero random da 1 a 9.
// Se è <= 5 il quadrato diventa giallo,
// se è > di 5 il quadrato diventa verde.
// Il numero ottenuto appare al centro del quadrato
// BONUS :
// generare dinamicamente la griglia;
// migliorare aspetto output, quindi renderlo più elaborato.

function clickDiv(){

  $(".row div").click(function(){

    var questoDiv = $(this);

    var questoP = $(this).children("p");

    $.ajax({
      url : "https://flynn.boolean.careers/exercises/api/random/int",

      method : "GET",

      success : function (numeroRitorno) {
        var num = numeroRitorno.response;
        if (num <= 5) {
          $(questoP).html(num);
          $(questoDiv).addClass("yellow");
          $("body").css("background-color","rgba(227, 255, 3, 0.61)");
        } else if (num > 5) {
          $(questoP).html(num);
          $(questoDiv).addClass("green");
          $("body").css("background-color","rgba(74, 255, 0, 0.53)");
        }
        $(questoDiv).off("click");
      },

      error : function (errore) {
        alert("E' avvenuto un errore. ");
      }
    });
  });
};

$(document).ready(function(){

    // creazione dinamica griglia con handlebars
    for (var i = 0; i < 6; i++) {
      var copiaTempl = $("#hb-template").html();
      var templReady = Handlebars.compile(copiaTempl);
      var griglia =+ $(".wrapper").append(templReady);
    }

    // attivazione funzione click-colore
    clickDiv();


});
