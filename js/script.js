// Palidroma
//Chiedere all’utente di inserire una parola
//Creare una funzione per capire se la parola inserita è palindroma

// - chiedi all'utente di inserire una parola tramite prompt per esempio
// - prendi la stringa ottenuta e invertila 
// - SE la stringa originaria è uguale alla stringa invertita 
//        ° stampa in console: la parola inserita è Palindroma
// : ALTRIMENTI
//        ° stampa in console: la parola inserita NON è palindroma

const userWordEl = document.getElementById("user-word");
const sendButtonEl = document.getElementById("send-button");
const palindromeResultEl = document.getElementById("palindrome-result");


sendButtonEl.addEventListener("click", function(){

    function isPalindrome(){
        let userWord = userWordEl.value;

        if(userWord == ""){
            palindromeResultEl.innerText = "Compila correttamente il campo di testo";

        } else if(userWord == reverseString(userWord)){
            palindromeResultEl.innerText = "La parola inserita è Palindroma";

        } else {
            palindromeResultEl.innerText = "La parola inserita NON è Palindroma";
        }
    }    
    isPalindrome();    
})

// _______________FUNZIONI___________________

function reverseString(string){
    //metodo split per restituire un nuovo array che contiene tutte le lettere della stringa
    let splitString = string.split("");
    //invertiamo l'array creato per ottenere la stringa al contrario
    let reverseArray = splitString.reverse();
    //uniamo tutti gli elementi dell'array in una stringa
    let joinArray = reverseArray.join("");
    //restituiamo la stringa invertita
    return joinArray;
}

// _____________FINE FUNZIONI______________


/*
Pari e Dispari
L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri
Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
Dichiariamo chi ha vinto.
*/

// utente sceglie pari o dispari, memorizziamo la scelta 
// utente inserisce un numero da 1 a 5, memorizziamo la scelta
// generiamo un numero RANDOM da 1 a 5 per il computer
// facciamo la somma dei due numeri random ottenuti
// tramite una funzione stabiliamo se il numero è pari o dispari.
// stampa a schermo il vincitore

const userEvenOrOddEl = document.getElementById("user-even-or-odd");
const userNumberChoiceEl = document.getElementById("user-number-choice");
const userNumberEl = document.getElementById("user-number");
const computerNumberEl = document.getElementById("computer-number");
const userEvenOrOddButtonEl = document.getElementById("user-even-or-odd-button");
const userNumberChoiceButtonEl = document.getElementById("user-number-choice-button");
const userChoiceEl = document.getElementById("user-choice"); 
const numberSumEl = document.getElementById("number-sum");
const pariDispariResultEl = document.getElementById("pari-dispari-result");

let choices = false;
let userEvenOrOdd;

userEvenOrOddButtonEl.addEventListener("click", function(){
    userEvenOrOdd = userEvenOrOddEl.value;
    userChoiceEl.innerText = `HAI SCELTO: ${userEvenOrOdd}`;
    let computerNumber = randomNumberBetween(1,5);

userNumberChoiceButtonEl.addEventListener("click", function(){
    let userNumberChoice = userNumberChoiceEl.value;
    userNumberEl.innerText = `Hai scelto il numero: ${userNumberChoice}`;
    computerNumberEl.innerText = `Il numero del Computer è: ${computerNumber}`;
    let sum = +userNumberChoice + computerNumber;
    numberSumEl.innerText = `La somma dei numeri è: ${sum}`;

    if(userEvenOrOdd == "pari"){
        choices = false;
    }
    
    if(userEvenOrOdd == "dispari"){
        choices = true;
    }

    if(choices == false && sum % 2 == 0){
        pariDispariResultEl.innerText = "COMPLIMENTI! HAI VINTO";

    } else if(choices == true && sum % 2 == 0){
        pariDispariResultEl.innerText = "HAI PERSO :(";

    } else if(choices == false && sum % 2 != 0){
        pariDispariResultEl.innerText = "HAI PERSO :(";

    } else if(choices == true && sum % 2 != 0){
        pariDispariResultEl.innerText = "COMPLIMENTI! HAI VINTO";
    }

})   

})

// _______________FUNZIONI___________________

// Numero random
function randomNumberBetween(min, max) {
    // generiamo un numero random
    let random = Math.floor(Math.random() * (max - min + 1) + min);
    // una volta che eseguimamo la funzione, restituisci al suo posto questo valore
    return random;
  }

// Numero pari o dispari
  function isEvenOrOdd(number) {
    if(number % 2 == 0) {
      return "la somma dei numeri è pari";  
    } else {  
      return "la somma dei numeri è dispari";  
    }
    
  }
  
// ______________FINE FUNZIONI______________
