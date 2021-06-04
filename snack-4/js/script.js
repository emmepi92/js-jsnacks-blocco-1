/*
In un array sono contenuti i nomi degli invitati alla festa del grande Gatsby,
chiedi all’utente il suo nome e comunicagli se può partecipare o no alla festa.
*/
var outputHtml = document.getElementById("result");

var invitedList =['Angelo','Ottavio', 'Pina', 'Anna'];
var userEmail = prompt("Inserisci il tuo nome");

var check = false;

for ( var i=0; i < invitedList.length; i++) {
    if (userEmail === invitedList[i]) {
        check = true;
    }
}

if (check) {
    outputHtml.innerHTML = 'Sei fra gli invitati';
} else {
    outputHtml.innerHTML = 'Non sei fra gli invitati';
}