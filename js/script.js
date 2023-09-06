// 1. Creare le variabili nome cognome e colore
// 2. Creare un messaggio di output con quei valori
// 3. Far stampare il messaggio di output da JS



const name = prompt ('Qual è il tuo nome?');
const surname = prompt ('Qual è il tuo cognome?');
const color = prompt ('Qual è il tuo colore preferito?');

const message = `ciao $(name), la tua nuova password è $(name)$(surname)$(color)23`

console.log(message)

