console.log('Node Started');

const express = require('express');

const app = express();

const port = 3000;


app.listen(port, function () {
    console.log("Listening on Port 3000");
});

app.get("/", (req, res) => {
res.sendFile(__dirname + '/index.html');
});