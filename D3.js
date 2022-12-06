/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/

const n1 = 20;
const n2 = 5;
if (n1 > n2) {
  console.log(n1, "è maggiore di ", n2);
} else console.log(n2, "è maggiore di ", n1);

console.log();

/* ESERCIZIO 2
  Scrivi un algoritmo che mostri "not equal" in console se un numero intero fornito è diverso da 5.
*/

const n3 = 8;
if (n2 != 5) {
  console.log(n2, "NOT EQUAL 5\n");
} else console.log(n2, "EQUAL 5\n");
if (n3 != 5) {
  console.log(n3, "NOT EQUAL 5\n");
} else console.log(n3, "EQUAL 5\n");

/* ESERCIZIO 3
  Scrivi un algoritmo che mostri "divisibile per 5" in console se un numero fornito è perfettamente divisibile per 5 (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

const n4 = 53;
if (n4 % 5) {
  console.log(n4, "non divisibile per 5  \n");
} else console.log(n4, "divisibile per 5 \n ");

/* ESERCIZIO 4
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/

let x = 4;
let y = 5;
if (x === 8) {
  console.log("yes\n");
} else if (y === 8) {
  console.log("yes\n");
} else if (x + y === 8) {
  console.log("yes!\n");
} else if (x - y === 8) {
  console.log("yes!\n");
} else {
  console.log("ES.4 non si puo fare\n");
}

/* ESERCIZIO 5
  Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
  C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
  Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/

const totalShoppingCart = 70;
const spedizione = 10;
if (totalShoppingCart > 50) {
  console.log("CARRELLO:", totalShoppingCart, "\n");
} else {
  console.log("CARRELLO:", totalShoppingCart + spedizione, "\n");
}

/* ESERCIZIO 6
  Stai lavorando su un sito di e-commerce. Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando come prima se le spedizioni sono gratuite oppure no e e calcolando il totale.
*/
const totalShoppingCart1 = 100;
if (totalShoppingCart1 > 50) {
  perc = totalShoppingCart1 * 0.8;
  console.log(perc);
} else {
  console.log(spedizione + perc);
}

/* ESERCIZIO 7
  Crea tre variabili, e assegna un valore numerico a ciascuna di esse.
  Utilizzando un blocco condizionale, crea un algoritmo per ordinarle secondo il loro valore, dal più alto al più basso.
  Alla fine mostra il risultato in console.
*/

// const ordine = [(n7 = 40), (n8 = 50), (n9 = 30)];

// const min = n7;
// if (n8 < min) {
//   min = n8;
// } else if (n9 < min) {
//   console.log(n9, "è il minimo");
//   min = n9;
// }
// console.log(min);

/* ESERCIZIO 8
  Crea un algoritmo per verificare che un valore fornito sia un numero oppure no (suggerimento: cerca su un motore di ricerca "typeof").
*/
n10 = 10;
if (typeof n10 === "string") {
  console.log(" non è stato inserito un numero\n");
} else {
  console.log(" è stato inserito un numero\n");
}

/* ESERCIZIO 9
  Crea un algoritmo per controllare se un numero fornito sia pari o dispari (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

const n11 = 5;
if (n11 % 2 === 0) {
  console.log(n11, "è pari");
} else console.log(n11, "è dispari");

/* ESERCIZIO 10
  Modifica la logica del seguente algoritmo in modo che mostri in console il messaggio corretto in ogni circostanza.*/
let val = 2;
if (val < 5) {
  console.log("Meno di 5");
} else if (val < 10) {
  console.log("Meno di 10");
} else {
  console.log("Uguale a 10 o maggiore");
}

/* ESERCIZIO 11
  Fornito il seguente oggetto, scrivi del codice per aggiungere una proprietà "city", il cui valore sarà "Toronto".
*/

const me = {
  name: "John",
  lastName: "Doe",
  skills: ["javascript", "html", "css"],
};
me.city = "Toronto";
console.log(me);

/* ESERCIZIO 12
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere la proprietà "lastName".
*/

delete me.lastName;

/* ESERCIZIO 13
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere l'ultimo elemento della proprietà "skills".
*/
me.skills.pop();
console.log(me);

/* ESERCIZIO 14
  Scrivi del codice per creare un array inizialmente vuoto. Riempilo successivamente con i numeri da 1 a 10.
*/
n = 1;
const vuoto = [];
vuoto.push(n++);
vuoto.push(n++);
vuoto.push(n++);
vuoto.push(n++);
vuoto.push(n++);
vuoto.push(n++);
vuoto.push(n++);
vuoto.push(n++);
vuoto.push(n++);
vuoto.push(n++);
//vuoto.push(1,2,3,4,,5,6,7,8,9,10)
console.log(vuoto);

/* ESERCIZIO 15
  Scrivi del codice per sostituire l'ultimo elemento dell'array, ovvero il valore 10, con il valore 100.
*/
vuoto[9] = 100;
// vuoto.pop();
// vuoto.push(100);
console.log(vuoto);
