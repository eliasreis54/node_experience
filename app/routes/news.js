
const DBconnection = require('../../modules/DBconnection')
module.exports =function(app){
    const connection = DBconnection()
    app.get('/news', function(req, res){
        //connection.query("sql", "calback")
        connection.query('select * from noticias order by titulo', function(err, result){
            try {
                res.render("news/newsPage", {news : result});
            }
            catch(err) {
                console.log("erro")
            }
        });
    });
}