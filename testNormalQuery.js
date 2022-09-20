const dbCon= require('./DB/dbConnection');

//let createCredentials='create table credentials( id int not null primary key auto_increment, email varchar(50) unique not null, password varchar(50) not null  );';
//let commands='insert into credentials(email, password) values ("amit@gmail.com","123456")';
//let commands = 'select * from credentials';
//let commands = 'delete  from credentials where id=2';
//let commands = 'update credentials set email="amitThakur@gmail.com" where id=2';
dbCon.query(commands, (err, row ,field)=>{
    if(err){
        console.log(err);
    }else{
        console.log(row);
    }
})
