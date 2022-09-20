const mysql = require('mysql');

const conURL= {
    host:'localhost',
    user:'root',
    password:'123456',
    database:'banking'
}

const connection = mysql.createConnection(conURL);

connection.connect((err)=>{
    if(!err){
        console.log('Database connected successfully....');
    }else{
        console.log('error ', err);
    }
})

module.exports=connection;