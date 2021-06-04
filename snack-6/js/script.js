/*
Stampa il cubo dei primi N numeri,
dove N è un numero indicato dall’utente attraverso un prompt. 
*/

var outputHtml = document.getElementById("result");

var numInput = parseInt(prompt("Inserisci un numero intero"));
var result;

for ( var i= 1; i <= numInput; i++) {
    result =  i * i * i;
    outputHtml.innerHTML += result + "<br/>";
}