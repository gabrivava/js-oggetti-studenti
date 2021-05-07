/* 

Ciclare su tutti gli studenti e stampare per ognuno di essi, nome e cognome.
Dare la possibilità all’utente, attraverso 3 prompt(), di aggiungere un nuovo oggetto studente inserendo nell’ordine: nome, cognome e età. */

//Creare un oggetto che descriva uno studente, con le seguenti proprietà:
/* nome,
cognome
età. */
var studente = {
    nome: 'gabriele',
    cognome: 'vavassori',
    età: 23
}
console.log(studente);

//Stampare a schermo attraverso un ciclo for-in tutte le proprietà dell'oggetto.
var datiStudenteEl = document.getElementById('dati_studente');
for (var key in studente) {
    console.log(key, studente[key]);
    datiStudenteEl.insertAdjacentHTML('afterend', 
    `
    <p> ${key}: ${studente[key]} </p>
    `
    )
}

//Creare un array di oggetti di studenti.
var classe = [
    {
        nome: 'franco',
        cognome: 'bisio',
        età: 35
    }
    
]