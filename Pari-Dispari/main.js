/* Pari e Dispari
 L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
 Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
 Sommiamo i due numeri
 Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
 Dichiariamo chi ha vinto. */

const inputPariDispari = document.getElementById("pariDispari");
const inputNumber = document.getElementById("inputNumber");
const btn = document.getElementById("btn");

btn.addEventListener("click", function () {

    const pariDispari = inputPariDispari.value;
    console.log("hai scelto: " + pariDispari);
    const number = parseInt(inputNumber.value);
    console.log("hai scelto: " + number);


    if (isNaN(number) || number < 1 || number > 5) {
        alert("Inserire un numero da 1 a 5");
        location.reload();
    }

    const pcNumber = randomNumber();
    console.log("Numero del pc: " + pcNumber);
    const sum = number + pcNumber;
    console.log("Somma: " + sum);
    const result = evenOdd(sum);
    console.log("risultato: " + result);

    if (result === pariDispari) {
        document.getElementById("win").innerHTML = `Hai Vinto`
        console.log("Hai Vinto");
    }
    else {
        document.getElementById("win").innerHTML = `Hai Perso`
        console.log("Hai Perso");
    }
})

// Creo funzione che genera un numero random tra 1 e 5
function randomNumber() {
    const random = Math.floor(Math.random() * 5) + 1;
    return random;
}

// Creo funzione che controlla se il numero inserito è pari o dispari
function evenOdd(n) {
    let evenOdd = "";
    if (n % 2 === 0) {
        evenOdd = "pari";
    }
    else {
        evenOdd = "dispari";
    }
    return evenOdd;
}
