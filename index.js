//---------------MODULO HTTP
//IMPORT FILE UTILIES
const { createPath, readApi, writeResult } = require('./utilies.JS');

const http = require("http");

const dotenv = require("dotenv");

dotenv.config();
const port = +process.env.PORT || 3000;

const server = http.createServer(function (req, res) {
    res.setHeader("Content-Type", "text/html;charset=utf-8");

    const phrasePath = createPath();
    readApi()
        .then((phrase) => {
            // Scrivo la battuta nel file JSON
            writeResult(phrasePath, phrase);

            // Rispondo con un messaggio
            res.end(phrase);
        })
        .catch((error) => {
            console.error('Si è verificato un errore nella richiesta API:', error);
            res.end("Errore nella richiesta API");
        });
});

server.listen(port, function () {
    //invochiamo listen per avviare il server 
    console.log("Server is running on port:" + port);
}); 