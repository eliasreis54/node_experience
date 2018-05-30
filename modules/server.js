const express = require('express'); //recuperando a biblioteca
const app = express();
app.set('view engine', 'ejs')
app.set('views', './app/views')
module.exports = app;