/* 

//Creare un oggetto che descriva uno studente, con le seguenti proprietà:
/* nome,
cognome
età. */
var studenteIo = {
    nome: 'gabriele',
    cognome: 'vavassori',
    età: 23
}

//Stampare a schermo attraverso un ciclo for-in tutte le proprietà dell'oggetto.
var datiStudenteEl = document.getElementById('dati_studente');
for (var key in studenteIo) {
    datiStudenteEl.insertAdjacentHTML('beforeend', 
    `
    <p> ${key}: ${studenteIo[key]} </p>
    `
    )
}

//Creare un array di oggetti di studenti.
var classe = [
    {
        nome: 'franco',
        cognome: 'bisio',
        età: 35
    },
    {
        nome: 'luigi',
        cognome: 'rossi',
        età: 55
    },
    {
        nome: 'emiliano',
        cognome: 'cantu',
        età: 27
    }
];

// Ciclare su tutti gli studenti e stampare per ognuno di essi, nome e cognome.
var datiClasseEl = document.getElementById('dati_classe');
for (var i = 0; i < classe.length; i++) {

    var studente = classe[i];

    datiClasseEl.innerHTML +=
    `
    <h4> Studente ${i}: </h4>
    `
    
    for (var key in studente) {
        console.log(key, studente[key]);
        datiClasseEl.insertAdjacentHTML('beforeend', 
        `
        <p> ${key}: ${studente[key]} </p>
        `
        )
    }
}
// Dare la possibilità all’utente, attraverso 3 prompt(), di aggiungere un nuovo oggetto studente inserendo nell’ordine: nome, cognome e età. */
