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
    if(userWord == ""){
        userWord = prompt("Compila il campo di testo!!!");
    }
    console.log(userWord);
    console.log(reverseString(userWord));

    if (userWord == reverseString(userWord)){
        console.log("la parola è palindroma");
    } else {
        console.log("la parola NON è palindroma");
    }
}

isPalindrome()


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



