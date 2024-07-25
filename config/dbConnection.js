// const Sequelize = require('sequelize');
const mysql = require('mysql2')

// var sequelize = new Sequelize('portal_noticias', 'root', '1234', {
//     host : 'localhost',
//     dialect : 'mysql'
// });

var connMySQL = function() {
    // console.log('Conexao com a bd foi estabelecida')
    return mysql.createConnection({
        host : "localhost",
        user : "root",
        password : "1234",
        database : "portal_noticias"
    });
}
 
module.exports = function() {
   return connMySQL;
}




// sequelize.authenticate().then(function(){
//         console.log('Conectado com sucesso');
//     }).catch(function() {
//         console.log('Falha ao se conectar ao db')
//     });
        
 

