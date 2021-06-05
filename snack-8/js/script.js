/*
Chiedi un numero di 4 cifre all’utente;
Calcola la somma di tutte le cifre che compongono il numero.
Bonus: controllate che il numero sia realmente di 4 cifre altrimenti restituite un alert.
*/

var outputHtml = document.getElementById("result");

var numInput = (prompt("Inserisci un numero di 4 cifre"));
var result = 0;

while ((numInput.length!==4) || (isNaN(numInput))) {
    alert("Inserisci un numero composto solo da 4 cifre, niente lettere o simboli");
    numInput = (prompt("Inserisci un numero di 4 cifre"));    
}

for (var i=0; i< numInput.length; i++) {
    result += parseInt(numInput[i]);
}

outputHtml.innerHTML = "La somma delle singole cifre del numero " + numInput + " è uguale a " + result;