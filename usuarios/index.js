
const app = require('express')();

app.get('/usuarios', (req, res) => res.send('Hello Usuario API'));

app.listen(3002, () => console.log(`Usuario api rodando na porta 3002!`));
