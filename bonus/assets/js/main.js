// Griglia 6x6, ad ogni click parte una richiesta AJAX che prende un numero random da 1 a 9.
// Se è <= 5 il quadrato diventa giallo,
// se è > di 5 il quadrato diventa verde.
// Il numero ottenuto appare al centro del quadrato

function clickDiv(){

  $(".row div").click(function(){

    var questoDiv = $(this);

    $(questoDiv).addClass("active");

    var questoP = $(this).children("p");

    $.ajax({
      url : "https://flynn.boolean.careers/exercises/api/random/int",

      method : "GET",

      success : function (numeroRitorno) {
        var num = numeroRitorno.response;
        if (num <= 5) {
          $(questoP).html(num);
          $(questoDiv).css("background", "yellow");
        } else if (num > 5) {
          $(questoP).html(num);
          $(questoDiv).css("background", "green");
        }
      },

      error : function (errore) {
        alert("E' avvenuto un errore. ");
      }
    });
  });


};
$(document).ready(function(){

  if ($(".row div").hasClass("active") == true) {
    $(this).off("click");
  } else {
    clickDiv();
  };


});
