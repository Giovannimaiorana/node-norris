//IMPORTAZIONE MODULO FILE SYSTEM
const fs = require('fs');
//IMPORTAZIONE PATH 
const path = require('path');
//IMPORTAZIONE AXIOS
const axios = require('axios');

//url dell'API
const apiUrl = 'https://api.chucknorris.io/jokes/random';

//creazione path
function createPath() {
    return path.join(__dirname, "db", "norrisDb.json");
}

//leggo api
function readApi() {

    return axios.get(apiUrl)
        .then((response) => {
            return response.data.value;

        });
}

//scrivo in file json
function writeResult(phrasePath, newPhrase) {
    let phrases = [];

    if (fs.existsSync(phrasePath)) {
        const existingData = fs.readFileSync(phrasePath, 'utf-8');
        phrases = JSON.parse(existingData);
    }
    if (phrases.some(phrase => phrase === newPhrase)) {
        console.log('La battuta è già presente nel file locale. Scarico un altra battuta');
        // cerco altra battuta 
        const newJoke = readApi();
        writeResult(phrasePath, newJoke);
    } else {
        phrases.push(newPhrase);

        fs.writeFileSync(phrasePath, JSON.stringify(phrases, null, 2), 'utf-8');
        console.log('Battuta salvata con successo nel file locale.');
    }
}



//FUNZIONE PER BATTUTA UNICA 





//ESPORTAZIONE
module.exports = { createPath, readApi, writeResult };
