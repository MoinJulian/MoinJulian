var elem = document.getElementById("eingabe");
elem.addEventListener("click", erzeugeZeitStempel);

function erzeugeZeitStempel() {
  var Zeitstempeltext = document.createTextNode(document.lastModified);
  var TextZuvor = document.createTextNode("Momentanes Datum: ");
  document.getElementById("Absatz").appendChild(TextZuvor);
  document.getElementById("Absatz").appendChild(Zeitstempeltext);
}
