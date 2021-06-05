/*
Generatore di “nomi cognomi” casuali: prendendo una lista di nomi e una lista di cognomi, 
Gatsby vuole generare una falsa lista di 3 invitati.
Bonus: non ripetere ne nome, ne cognome
*/

var names = ['Ottavio', 'Alfredo', 'Davide', 'Luca', 'Mattia', 'Anna', 'Maria', 'Angela'];
var surnames = ['Rossi', 'Gialli', 'Bianchi', 'Verdi', 'Nero'];
var guestList = [];
var guest = '';
var name = '';
var surname = '';
var pushed = [];
var maxGuests = parseInt(prompt('Quanti invitati fake desideri generare? (max 5)'));

while (isNaN(maxGuests) || maxGuests > 5 ){
    alert('Inserisci un numero compreso fra 1 e 5');
    maxGuests = parseInt(prompt('Quanti invitati fake desideri generare? (max 5)'));
}

document.getElementById("list").innerHTML =  '<strong> Gatsby\'s Guest List </strong> <br/>';

var result = '';

// for maxGuests random Names
while ( guestList.length < maxGuests) {
    name = names[Math.floor(Math.random()*names.length)];
    surname = surnames[Math.floor(Math.random()*surnames.length)];
    guest = name + ' ' + surname;
    if (!guestList.includes(guest) && !pushed.includes(name) && !pushed.includes(surname)) {
        guestList.push(guest);
        pushed.push(name, surname);
        result += '<li>' + guest + '</li>';
    }
}

document.getElementById("result").innerHTML = result;