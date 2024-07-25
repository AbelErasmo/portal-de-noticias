module.exports = function(application) {
       
    application.get('/noticias', function(req, resp) {
        application.app.controllers.noticias.noticias(application, req, resp);
    });
 
    application.get('/noticia', function(req, resp) {
        application.app.controllers.noticias.noticia(application, req, resp);
    });
};