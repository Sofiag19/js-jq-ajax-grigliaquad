// Griglia 6x6, ad ogni click parte una richiesta AJAX che prende un numero random da 1 a 9.
// Se è <= 5 il quadrato diventa giallo,
// se è > di 5 il quadrato diventa verde.
// Il numero ottenuto appare al centro del quadrato

$(document).ready(function(){


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
        $(questoDiv).css("background", "yellow");
      } else if (num > 5) {
        $(questoP).html(num);
        $(questoDiv).css("background", "green");
      }
    },
    error : function (richiesta,stato,errori) {
      alert("E' avvenuto un errore. "+ errore);
    }
  });

});







});
