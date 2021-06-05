// Inserisci un numero, se è pari stampa il numero,se è dispari stampa il numero successivo

var outputHtml = document.getElementById("result");
var userNum = parseInt(prompt("inserisci un numero"));


while (isNaN(userNum)) {
    alert('Devi inserire un numero');
    userNum = parseInt(prompt("inserisci un numero"));
}

var result;
if ( userNum % 2 === 0 ) {
    result = userNum;
} else {
    result = userNum + 1;
}

outputHtml.innerHTML ='Il numero inserito è ' + userNum + ', con l\' arrotondamento ad un numero pari è ' + result;