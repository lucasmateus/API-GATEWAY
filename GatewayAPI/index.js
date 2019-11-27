const express = require('express');
const httpProxy = require('express-http-proxy');
const app = express();
const port = 3000;
const {
  USERS_API_URL,
  PRODUCTS_API_URL,
} = require('./url');

const usuarioServiceProxy = httpProxy(USERS_API_URL);
const produtoServiceProxy = httpProxy(PRODUCTS_API_URL);

app.get('/', (req, res) => res.send('Hello Gateway API'));

app.get('/usuarios', (req, res, next) => usuarioServiceProxy(req, res, next));
app.get('/produtos', (req, res, next) => produtoServiceProxy(req, res, next));

app.listen(port, () => console.log(`Api-Gatway rodando na porta: ${port}!`));
