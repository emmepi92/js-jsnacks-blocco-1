/*
L’utente inserisce due parole in successione, con due prompt.
Il software stampa prima la parola più corta, poi la parola più lunga.
*/
var outputHtml = document.getElementById("result");
var result;
var wordUser1 = prompt("Inserisci una parola");
var wordUser2 = prompt("Inserisci un'altra parola");

if (wordUser1.length > wordUser2.length ) {
    result = wordUser2 + ' ' + wordUser1;
} else if (wordUser1.length === wordUser2.length )
    result = "Le due parole inserite hanno la stessa lunghezza";
else { 
    result = wordUser1 + ' ' + wordUser2;
}

outputHtml.innerHTML = result;