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
function writeResult(phrasePath, phrase) {
    fs.writeFileSync(phrasePath, JSON.stringify(phrase, null, 2), 'utf-8');
}

//ESPORTAZIONE
module.exports = { createPath, readApi, writeResult };
