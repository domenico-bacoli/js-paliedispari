// Palidroma
//Chiedere all’utente di inserire una parola
//Creare una funzione per capire se la parola inserita è palindroma

// - chiedi all'utente di inserire una parola tramite prompt per esempio
// - prendi la stringa ottenuta e invertila 
// - SE la stringa originaria è uguale alla stringa invertita 
//        ° stampa in console: la parola inserita è Palindroma
// : ALTRIMENTI
//        ° stampa in console: la parola inserita NON è palindroma
  
function isPalindrome(){
    let userWord = prompt("Inserisci una parola");

    if(userWord != ""){
        console.log(userWord);
        console.log(reverseString(userWord));
    
    if (userWord == reverseString(userWord)){
            console.log("la parola è palindroma");
    } else {
            console.log("la parola NON è palindroma");
    }

    } else {
        userWord = prompt("Compila il campo di testo!!!");
    }
}

// isPalindrome()


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

let choices = false;
let userEvenOrOdd = prompt("Pari o Dispari?");
let userNumberChoice = parseInt(prompt("Inserisci un numero"));
let computerNumber = randomNumberBetween(1,5);
console.log(userNumberChoice);
console.log(computerNumber);

if(userEvenOrOdd == "pari"){
    choices = false;
    console.log(choices);
    console.log("l'utente ha scelto pari");
} else if(userEvenOrOdd == "dispari"){
    choices = true;
    console.log(choices);
    console.log("l'utente ha scelto dispari");
}

sum = userNumberChoice + computerNumber;
console.log(sum);

console.log(isEvenOrOdd(sum));

if(choices == false && sum % 2 == 0){
    console.log("ha vinto L'utente");
} else {
    console.log("ha vinto il Computer");
}





// _______________FUNZIONI___________________

// Numero random
function randomNumberBetween(min, max) {
    // generiamo un numero random
    let random = Math.floor(Math.random() * (max - min + 1) + min)
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
  
// ______________FINE FUNZIONI_______________
