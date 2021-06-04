// Stampa le potenze di 2 fino a 1000.

var outputHtml = document.getElementById("result");
var result;

for ( var i=0; i < 1000; i++) {
    result = Math.pow(2, i);
    outputHtml.innerHTML += result + "<br/>";
}