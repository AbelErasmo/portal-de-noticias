module.exports.formulario_inclusao_noticia = function(application, req, resp) {
    resp.render("admin/form_add_noticia", {validacao : {}, noticia : {}});
}

module.exports.noticias_salvar = function(application, req, resp) {
    var noticia = req.body;

        req.assert('tituto', 'Título é obrigatório').notEmpty();
        req.assert('resumo', 'Resumo é obrigatório').notEmpty();
        req.assert('resumo', 'Resumo deve conter entre 10 a 100 caracteres').len(10, 100);
        req.assert('autor', 'Autor é obrigatorio').notEmpty();
        req.assert('data_noticia', 'Data é obrigatorio').notEmpty().isDate({Format: 'YYYY-MM-DD'});
        req.assert('noticia', 'Noticia é obrigatorio').notEmpty();

        var erros = req.validationErrors();

        if (erros) {
            resp.render("admin/form_add_noticia", {validacao : erros, noticia : noticia});
            return;
        }
        
        var connection = application.config.dbConnection();
        var noticiasModel = new application.app.models.NoticiasDAO(connection);

        noticiasModel.salvarNoticia(noticia, function(error, result) {
           resp.redirect('/noticias'); 
        });
}