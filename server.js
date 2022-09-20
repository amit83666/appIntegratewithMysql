const dbCon = require('./DB/dbConnection');
const bodyParser =require('body-parser');
const app = require('express')();
app.use(bodyParser.json());
const port = 3000;

app.get('/credentials', (req, res)=>{
    let commands='select * from credentials';
    dbCon.query(commands, (err, row ,field)=>{
        if(err){
            console.log(err);
        }else{
            console.log(row);
            res.send(row);
        }
    })
})

app.get('/credential/:id',(req,res)=>{
    let id=req.params.id;
    let commands=`select * from credentials where id=${id}`;
    dbCon.query(commands,(err, row, field)=>{
        if(err){
            console.log(err);
        }else{
            console.log(row);
            res.send(row);
        }
    })
})

app.post('/signup',(req, res)=>{
    let email=req.body.email;
    let password=req.body.password;
    console.log("body ", req.body);
    let commands=`insert into credentials(email, password) values ("${email}", "${password}")`; 
    dbCon.query(commands,(err, row, field)=>{
        if(err){
            console.log(err);
            res.send("something went wrong..");
        }else{
            console.log('successfully data inserted',row);
            res.send("dara inserted....");
        }
    })
})

app.post('/login',(req, res)=>{
    let email=req.body.email;
    let password=req.body.password;
    let commands=`select * from credentials where email="${email}" and password="${password}"`; 
    dbCon.query(commands,(err, row, field)=>{
        if(err){
            console.log(err);
            res.send("something went wrong..");
        }else{
            console.log('successfully data inserted',row);
            res.send(row);
        }
    })
})

app.delete('/credential/:id',(req, res)=>{
    let id=req.params.id;
    let commands=`delete from credentials where id=${id}`;
    dbCon.query(commands,(err, row, field)=>{
        if(err){
            console.log(err);
        }else{
            console.log(row);
            res.send("data deleted sucessfully...");
        }
    })
})

app.put('/credential/:id',(req, res)=>{
    let email=req.body.email;
    let password=req.body.password;
    let id=req.params.id;
    let commands=`update credentials set email="${email}", password="${password}" where id=${id}`;
    dbCon.query(commands,(err, row, field)=>{
        if(err){
            console.log(err);
        }else{
            console.log(row);
            res.send("data updated sucessfully...");
        }
    })
})



app.listen(port,()=>{
    console.log(`server is listening on port no. ${port}`);
})
