var mysql = require('mysql');
function mydb(config){
    var connection = mysql.createConnection(config);
    connection.connect();
    return connection;
}
module.exports = mydb;