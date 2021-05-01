const express = require('express');
const path = require('path');

const app = express();

app.use(express.static(__dirname + '/public'));

app.use('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'main.html'));
});

app.listen(8080);

console.log('Je tourne sur le port 8080');