/* Palidroma
Chiedere all’utente di inserire una parola
Creare una funzione per capire se la parola inserita è palindroma 
*/

const inputText = document.getElementById("inputText");
const btn = document.getElementById("btn");
let array = [];

btn.addEventListener("click", function () {

    const text = inputText.value;
    console.log(text);

    array = text.split("");

    const result = palindromo(array);

    if (result === true) {
        document.getElementById("risultato").innerHTML = `È Palindromo`
        console.log("È Palindromo")
    }
    else {
        document.getElementById("risultato").innerHTML = `Non è Palindromo`
        console.log("Non è palindroma")
    }

})

function palindromo(array) {

    let palindrome = true;
    let x = array.length - 1;

    for (let i = 0; i < array.length; i++) {

        if (array[i] === array[x]) {
            x--
        }
        else {
            palindrome = false;
            return palindrome;
        }
    }
    return palindrome;
}