$(document).ready(function() {
  var age = parseInt(prompt("How old are you?"));

  if (age >= 18) {
    $('#if18').show();
  } else {
    $('#ifnot18').show();
  }
});
