const mysql = require('mysql');
const connection = mysql.createConnection({
    host : 'localhost',
    user : 'root',
    password : '0000',  //패스워드
    database : 'cafe_study'         // db명
}); 

module.exports = connection;