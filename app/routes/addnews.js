module.exports =function(app){
    app.get('/addnews', function(req, res){
        res.render("admin/form_add_noticia")
    });
}