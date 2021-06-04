/*
Generatore di “nomi cognomi” casuali: prendendo una lista di nomi e una lista di cognomi, 
Gatsby vuole generare una falsa lista di 3 invitati.
*/

var names = ['Ottavio', 'Alfredo', 'Davide', 'Luca', 'Mattia', 'Anna', 'Maria', 'Angela'];
var surnames = ['Rossi', 'Gialli', 'Biachi', 'Verdi', 'Nero'];

var result = '<strong> Lista di Invitati </strong> <br/>';

// for 3 random Names
for ( var i = 1; i<=3; i++) {
    result += names [Math.floor(Math.random()*8)] + ' ' + surnames[Math.floor(Math.random()*5)] + '<br/>';
}

document.getElementById("result").innerHTML = result;
