const express = require('express');
const app = express();
const PORT = process.env.PORT || 4000;
const db = require('./config/db');
const cors = require("cors");

app.get('/', (req,res)=>{
    console.log('/root')
})

app.get('/test_body',(req,res)=>{
    console.log('/test_body')
    db.query("select * from test",(err, data) =>{
        if(!err){
            console.log(data)//정보
        }
        else{
            console.log(err)
        }
    })
})

app.listen(PORT, ()=>{
    console.log(`Server On : http://localhost:${PORT}`)
})