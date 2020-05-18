var mysql = require('mysql');
var con = mysql.createConnection({
    host: "localhost",
    user: process.env.USER,
    password: process.env.PASSWORD,
    database:"modulo",
    multipleStatements:true
  });
  
  con.connect((err) =>{
    if (!err){

console.log("DB is Connected!");
    } 
    else{
      console.log(err);
    }
  });
  module.exports = con
