console.log('JS OK');

/* Traccia
Inserisci un numero, se è pari stampa il numero,
se è dispari stampa il numero successivo
*/

let number = Math.floor(Math.random() * 100); // Sciviamo un numero casuale
console.log(number);

let even = 2;

if (number % even === 0) {
    console.log(number);
} else {
    number = Math.floor(Math.random() * 100);
}

//Il secondo numero in console è pari, altrimenti vedo solo un numero