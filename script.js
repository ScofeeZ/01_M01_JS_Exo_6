function jesaiscompter() {
var premier_nombre = document.getElementById("premier_nombre").value;
var deuxieme_nombre = document.getElementById("deuxieme_nombre").value;
  if (isNaN (premier_nombre) == true || isNaN (deuxieme_nombre) == true) {
  alert("ta mère la tartiflette!");
  }
  else {
  premier_nombre = parseFloat(premier_nombre);
  deuxieme_nombre = parseFloat(deuxieme_nombre);
  var showtime = (premier_nombre % deuxieme_nombre);
  alert("Mon résultat est " + showtime + " !");
  }
}
