var express = require('express');
var consign = require('consign');
var body_parser = require('body-parser');
var expressValidator = require('express-validator');

var app = express();
app.set('view engine', 'ejs');
app.set('views', './app/views');

app.use(expressValidator());
app.use(express.static('./app/public'));
app.use(body_parser.urlencoded({extended: true}));
// app.use(express.json());

consign()
.include('app/routes')
.then('config/dbConnection.js')
.then('app/models')
.then('app/controllers')
.into(app);

module.exports = app;