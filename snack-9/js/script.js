// Calcola la somma e la media dei primi 10 numeri.
var outputHtml = document.getElementById("result");

var sum = 0;

for (i=1; i<=10; i++ ) {
    sum += i;
}
outputHtml.innerHTML = 'La somma dei primi 10 numeri è ' + sum + '<br/>';

var avarage = sum / 10;

outputHtml.innerHTML += 'La loro media è ' + avarage;