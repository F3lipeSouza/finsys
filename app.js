const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send("yes");
});

console.log("ta ok")