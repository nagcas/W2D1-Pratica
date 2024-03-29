//ESERCIZI SUGLI IF: 

/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/

console.log("Esercizio n. 1");
let num1 = prompt("Esercizio 1 - Algoritmo per trovare il più grande tra due numeri interi. Inserisci il primo numero intero: ");
let num2 = prompt("Esercizio 1 - Algoritmo per trovare il più grande tra due numeri interi. Inserisci il secondo numero intero: ");

if (!parseInt(num1) || !parseInt(num2)) { // verifica se il valore inserito corrisponde ad un itero
    console.log("Hai inserito un valore non valido...")
} else { // se i valori sono corretti esegue il confronto dei numeri inseriti
    console.log("Numero 1: " + num1, "Numero 2: " + num2);
    if (num1 > num2) { // verifica se il numero 1 è più grande del numero 2;
      console.log(num1 + " è il numero più grande.");
    } else if (num2 > num1) { // verifica se il numero 2 è più grande del numero 2;
      console.log(num2 + " è il numero più grande.");
    } else { // se non vengono soddisfatte le precedenti condizioni;
      console.log("I due numeri sono uguali!!!");
    }
}



/* SCRIVI QUI LA TUA RISPOSTA */

/*
ESERCIZIO 2
  Crea un blocco condizionale if/else per mostrare in console il messaggio corretto in ogni condizione.

  num < 5 - mostra in console "Tiny"
  num < 10 - mostra in console "Small"
  num < 15 - mostra in console "Medium"
  num < 20 - mostra in console "Large"
  num >= 20 - mostra in console "Huge"
*/

/* SCRIVI QUI LA TUA RISPOSTA */

console.log("Esercizio n. 2");
let num = prompt("Esercizio n. 2 - Condizione if/else. Inserisci un numero intero: ");
 
if (!parseInt(num)) { // verifica se il valore inserito corrisponde ad un iter
    console.log("Hai inserito un valore non valido...")
} else { // se il valore inserito è un intero esegue il blocco di codice if/else
    if (num < 5) {
        console.log("Tiny");
      } else if (num < 10) {
        console.log("Small");
      } else if (num < 15) {
        console.log("Medium");
      } else if (num < 20) {
        console.log("Large");
      } else if (num >= 20) {
        console.log("Huge");
      }
}



//ESERCIZI SUI CICLI: 

/* ESERCIZIO 3
  Mostra i numeri da 0 a 10 (incluso) in ordine ascendente, ma evitando di mostrare i numeri 3 e 8 (suggerimento: ripassa l'uso di "continue").
*/

/* SCRIVI QUI LA TUA RISPOSTA */

console.log("Eserizio n. 3");
let list = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; // arreay composto da valori da 0 a 10
for (let i = 0; i < list.length; i++) {
  if (list[i] == 3 || list[i] == 8) { // se nella lista incontra il valore di 3 o 8 continua e non esegue il console.log()
    continue;
  }
  console.log(list[i]);
}

/* ESERCIZIO 4
  Scrivi un ciclo in JavaScript per iterare da 0 a 15. Per ciascun elemento, il ciclo deve controllare the il valore corrente sia pari o dispari, e mostrare il risultato in console.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

console.log("Esercizio n. 4");
for (let i = 0; i <= 15; i++) { // esegue un ciclo di for di numeri interi da 0 a 15
  if (i % 2 == 0) { // verifica se esiste un valore il cui resto da zero e restituisce numero pari
    console.log(i, "numero pari.");
  } else { // altrimenti restituisce numero dispari
    console.log(i, "numero dispari.");
  }
}

//ESERCIZI EXTRA NON OBBLIGATORI

/* ESERCIZIO EXTRA 1
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

console.log("Esercizio extra n. 1");
let dato1 = prompt("Inserisci il primo numero intero: ");
let dato2 = prompt("Inserisci il secondo numero intero: ");

if (!parseInt(dato1) || !parseInt(dato2)) { // verifica se i valori inseriti nel prompt sono validi
    console.log("Hai inserito un valore non valido...");
} else { // se i valori sono corretti esegue il codice
    console.log("Primo numero inserito: " + dato1);
    console.log("Secondo numero inserito: " + dato2);
    
    if (dato1 === 8 || dato2 === 8 || (dato1 + dato2) === 8 || (dato1 - dato2) === 8 || (dato2 - dato1) === 8) { // verifica se tra i valori esiste la condizione in cui si ottiene un valore di 8. 
      console.log("Hai inserito un numero 8 oppure la somma o la sottrazione dei due numeri da 8.");
    } else {
      console.log("I dati inseriti non danno nessun valore di 8.");
    }
}



/* ESERCIZIO EXTRA 2
Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

console.log("Esercizio extra n. 2");
let totalShoppingCart = 0;
let shipping = 10;
let spesa = [3, 15, 10, 5]; // array della lista contenente il costo di ogni soingolo articolo acquistato

for (let i = 0; i < spesa.length; i++) { // esegue un ciclo for per visualizzare in console gli articoli acquistati
  console.log("Articolo ",i + 1 ,".... €", spesa[i])
  totalShoppingCart += spesa[i]; // esegue la somma di tutti gli articoli acquistati
}
console.log("Totale carrello: €", totalShoppingCart);

if (totalShoppingCart >= 50) { // verifica la condizione per avere la spesa di spedizione gratuita a fronte di una spesa maggiore o uguale a € 50
  console.log("Spedizione gratuita.");
  console.log("Totale costo esclusa spedizione: €", totalShoppingCart);
} else {
  console.log("Spedizione.................: €", shipping);
  console.log("Totale spesa...............: €", totalShoppingCart);
  console.log("Totale inclusa spedizione..: €", (totalShoppingCart + shipping));
}

/* ESERCIZIO EXTRA 3
  Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando, usando l'algoritmo del codice precedente, se le spedizioni siano gratuite oppure no e e calcolando il totale.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

console.log("Esercizio extra n. 3");
let totalShoppingCart1 = 0;
let shipping1 = 10;
let sconto = 20;
let spesa1 = [100, 15, 10, 5]; // array della lista contenente il costo di ogni soingolo articolo acquistato

for (let i = 0; i < spesa1.length; i++) { // esegue un ciclo for per visualizzare in console gli articoli acquistati
  let sconto2 = spesa1[i] - ((spesa1[i] * sconto) / 100); // applica lo sconto del 20% per ogni singolo articolo acquistato
  console.log("Articolo", i + 1 ,"sconto", sconto + "%", "€", sconto2);
  totalShoppingCart1 += sconto2; 
}
console.log("Totale carrello: €", totalShoppingCart1);

if (totalShoppingCart1 >= 50) { // verifica la condizione per avere la spesa di spedizione gratuita a fronte di una spesa maggiore o uguale a € 50
  console.log("Spedizione gratuita.");
  console.log("Totale costo esclusa spedizione: €", totalShoppingCart1);
} else {
  console.log("Spedizione.................: €", shipping1);
  console.log("Totale spesa...............: €", totalShoppingCart1);
  console.log("Totale inclusa spedizione..: €", (totalShoppingCart1 + shipping1));
}



/*  ESERCIZIO EXTRA 4
  Usa un operatore ternaio per assegnare ad una variabile chiamata "gender" i valori "male" o "female".
  La scelta deve essere basata sul valore di un'altra variabile booleana chiamata isMale.
  Es. se isMale e' vero, il valore di gender deve essere "male"
*/

/* SCRIVI QUI LA TUA RISPOSTA */

console.log("Esercizio extra n. 4");
let gender;
let isMale = true; 

gender = isMale ? "Male" : "Female"; // verifica la condizione se la variabile isMale è true o false è restituisce il valore corrispondente
console.log("gender:", gender);


/* ESERCIZIO EXTRA 5
  Scrivi un algoritmo che iteri i numeri da 1 a 100, stampandoli in console. Se un valore tuttavia è multiplo di 3 (operatore modulo!), stampa al suo posto la parola "Fizz" e se il numero è multiplo di 5, stampa "Buzz". Se le condizioni si verificano entrambe, stampa "FizzBuzz".
*/

/* SCRIVI QUI LA TUA RISPOSTA */

console.log("Esercizio extra n. 5");
for (let i = 1; i <= 100; i++) { // esegue un ciclo dei numeri a partire dal valore 1 fino a 100
  if (i % 3 === 0 && i % 5 === 0) { // se si verifica la condizione simultanea che un numero è multiplo di 3 e multiplo di 5 
    console.log("FizzBuzz"); // scrive in console "FizzBuzz"
  } else if (i % 3 === 0) { // se invece la condizione restituisce un valore multiplo di 3
    console.log("Fizz"); // scrive in console "Fizz"
  } else if (i % 5 === 0) { // se invece il numero è un multiplo di 5
    console.log("Buzz"); // visualizza in console "Buzz"
  } else {
    console.log(i);
  }
}
