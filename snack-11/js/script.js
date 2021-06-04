// Inserisci un numero, se è pari stampa il numero,se è dispari stampa il numero successivo

var userNum = parseInt(prompt("inserisci un numero"));

var result;

if ( userNum % 2 === 0 ) {
    result = userNum;
} else {
    result = userNum + 1;
}

document.getElementById("result").innerHTML = result;