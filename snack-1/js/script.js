//L’utente inserisce due numeri in successione, con due prompt.
//Il software stampa il maggiore.

// importante il parseInt !!! 
var numUser1 = parseInt(prompt("Inserisci un numero"));
var numUser2 = parseInt(prompt("Inserisci un altronumero"));
var outputHtml = document.getElementById("result");

var result;

if (numUser1 > numUser2) {
    result = "Il primo numero inserito è maggiore del secondo";
} else if  (numUser1 < numUser2) {
    result = "Il secondo numero inserito è maggiore del primo";
} else {  // ricorda i 3 = !!!!!
    result = "I due numeri inseriti sono uguali"
};

outputHtml.innerHTML = result;
outputHtml.innerHTML += '<br/> Il primo numero inserito è ' + numUser1;
outputHtml.innerHTML += ' <br/> Il secondo numero inserito è ' + numUser2;