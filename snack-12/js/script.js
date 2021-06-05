/*
Generatore di “nomi cognomi” casuali: prendendo una lista di nomi e una lista di cognomi, 
Gatsby vuole generare una falsa lista di 3 invitati.
Bonus: non ripetere ne nome, ne cognome
*/

var names = ['Ottavio', 'Alfredo', 'Davide', 'Luca', 'Mattia', 'Anna', 'Maria', 'Angela'];
var surnames = ['Rossi', 'Gialli', 'Bianchi', 'Verdi', 'Nero', 'Coccioli'];
var guestList = [];
var guest = '';
var name = '';
var surname = '';
var pushed = [];
var max = 0;

// set the maximum number of names to generate, whitout doubles
if (names.length <= surnames.length) {
    max = names.length;
} else {
    max= surnames.length;
}

// ask how many guests the user wants to generate 
var maxGuests = parseInt(prompt('Quanti invitati fake desideri generare? (max ' + max + ')'));

// check conditions, dont exceed the max and dont accept 0 
while (isNaN(maxGuests) || maxGuests > max || maxGuests <= 0){
    if (maxGuests === 0) {
        alert('Lista vuota non accettata');
        maxGuests = parseInt(prompt('Quanti invitati fake desideri generare? (max ' + max + ')'));
    } else {
        alert('Inserisci un numero compreso fra 1 e ' + max);
        maxGuests = parseInt(prompt('Quanti invitati fake desideri generare? (max ' + max + ')'));
    }
}

document.getElementById("list").innerHTML =  '<strong> Gatsby\'s Guest List </strong> <br/>';

var result = '';

// for random Names
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