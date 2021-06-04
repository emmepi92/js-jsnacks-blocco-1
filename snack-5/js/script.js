/*
Crea un array vuoto.
Chiedi per 6 volte all’utente di inserire un numero,
se è dispari inseriscilo nell’array.
*/
var outputHtml = document.getElementById("result");
var numberList = [];

for (var i=0; i < 6; i++ ) {
    var numberInput = parseInt(prompt("Inserisci un numero"))
    if (numberInput % 2 === 1) {
        numberList.push(numberInput)
    }
}
outputHtml.innerHTML = numberList;