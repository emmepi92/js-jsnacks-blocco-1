/*
Il software deve chiedere per 5 volte all’utente di inserire un numero.
Il programma stampa la somma di tutti i numeri inseriti.
Esegui questo programma in due versioni, con il for e con il while.
*/

var sum = 0;
var result = '';

for (var i=1; i<= 5; i++) {
    var userNum = parseInt(prompt("Inserisci un numero"));
    sum += userNum;
    result += userNum + '<br/>';
}
document.getElementById("result").innerHTML = result + sum + '<br/> <br/>';

//-------------------------------------------------------------------------

var sum2 = 0;
var result2 = '';
var x= 1;

while (x <= 5) {
    var userNum2 = parseInt(prompt("Inserisci un numero"));
    sum2 += userNum2;
    x++;
    result2 += userNum2 + '<br/>';    
}

document.getElementById("result").innerHTML += result2 + sum2;







