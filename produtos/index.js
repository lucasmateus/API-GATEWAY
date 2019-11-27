
const app = require('express')();

app.get('/produtos', (req, res) => res.send('Mensagem do produtos API'));

app.listen(3001, () => console.log(`Produtos api rodando na porta: 3001!`));
