const mysql = require('mysql');

module.exports = function(){
    return mysql.createConnection({
        host : 'localhost',
        user : 'node',
        password : 'nodejs',
        database : 'portal_noticias',
        port: '3308'
    });
}