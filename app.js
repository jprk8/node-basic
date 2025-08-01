const path = require('path');
const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'))
});

app.get('/about', (req, res) => {
    res.sendFile(path.join(__dirname, 'about.html'))
});

app.get('/contact-me', (req, res) => {
    res.sendFile(path.join(__dirname, 'contact-me.html'))
});

app.use((req, res) => {
    res.sendFile(path.join(__dirname, '404.html'))
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`My first Express app - listening on port ${PORT}!`);
});