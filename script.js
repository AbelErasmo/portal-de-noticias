//import { createServer } from 'http';

const { createServer } = require('http');

var server = createServer(function(req, resp) {
    
    var categoria = req.url;

    if(categoria == '/Musica') {
        resp.end("<html><body><h2>Noticias de Tecnologia</h2></body></html>");
    } else if (categoria == '/ciencia') { 
        resp.end("<html><body><h2>Noticias sobre ciencia</h2></body></html>");
    } else if(categoria == '/beleza') {
        resp.end("<html><body><h2>Noticias de beleza</h2></body></html>");
    } else {
        resp.end("<html><body><h1>Portal de Noticias</h1></body></html>");
    }
}).listen(3000);