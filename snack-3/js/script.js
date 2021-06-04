/*
il software deve chiedere per 10 volte all’utente di inserire un numero.
Il programma stampa la somma di tutti i numeri inseriti.
*/
var outputHtml = document.getElementById("result");
var sumUser = 0;

for ( var i = 0; i < 10; i++) {
   var numberUser = parseInt(prompt("Inserisci un numero"));
   sumUser += numberUser;
}

outputHtml.innerHTML = 'La somma è ' + sumUser;
