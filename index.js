const http = require("http");

const dotenv = require("dotenv");

dotenv.config();
const port = +process.env.PORT || 3000;

const server = http.createServer(function (req, res) {

    res.end("Hello testtest")

})
server.listen(port, function () {
    //invochiamo listen per avviare il server 
    console.log("Server is running on port:" + port);
}); 