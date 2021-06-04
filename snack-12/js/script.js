/*
Generatore di “nomi cognomi” casuali: prendendo una lista di nomi e una lista di cognomi, 
Gatsby vuole generare una falsa lista di 3 invitati.
*/

var names = ['Ottavio', 'Alfredo', 'Davide', 'Luca', 'Mattia', 'Anna', 'Maria', 'Angela'];
var surnames = ['Rossi', 'Gialli', 'Bianchi', 'Verdi', 'Nero'];
var guestList = [];
var guest = '';

document.getElementById("list").innerHTML =  '<strong> Gatsby\'s Guest List </strong> <br/>';

var result = '';

// for 3 random Names
while ( guestList.length < 3) {
    guest = names[Math.floor(Math.random()*names.length)] + ' ' + surnames[Math.floor(Math.random()*surnames.length)];
    if (!guestList.includes(guest)) {
        guestList.push(guest)
        result += '<li>' + guest + '</li>';
    }
}

document.getElementById("result").innerHTML = result;