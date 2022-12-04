const express = require('express');
const app = express();
const PORT = process.env.PORT || 4000;
const db = require('./config/db');



app.get('/', (req,res)=>{
    console.log('/root')
})

app.get('/cafe_info',(req,res)=>{
    console.log('/cafe_info')
    db.query("select * from cafe_info",(err, data) =>{
        if(!err){
            console.log({place: data})//정보
            res.send(data)
        }
        else{
            console.log(err)
        }
    })
})

app.get('/cafe_keyword', (req,res)=>{
    console.log('/cafe_keyword')
    db.query("select * from cafe_keyword",(err, data) =>{
        if(!err){
            console.log({place: data})//정보
            res.send(data)
        }
        else{
            console.log(err)
        }
    })
})

app.get('/gather_info', (req,res)=>{
    console.log('/gather_info')
    db.query("select * from gather_info",(err, data) =>{
        if(!err){
            console.log({place: data})//정보
            res.send(data)
        }
        else{
            console.log(err)
        }
    })
})

app.get('/living_info', (req,res)=>{
    console.log('/living_info')
    db.query("select * from living_info",(err, data) =>{
        if(!err){
            console.log({place: data})//정보
            res.send(data)
        }
        else{
            console.log(err)
        }
    })
})

app.get('/living_info', (req,res)=>{
    console.log('/living_info')
    db.query("select * from living_info",(err, data) =>{
        if(!err){
            console.log({place: data})//정보
            res.send(data)
        }
        else{
            console.log(err)
        }
    })
})

app.get('/office_info', (req,res)=>{
    console.log('/office_info')
    db.query("select * from office_info",(err, data) =>{
        if(!err){
            console.log({place: data})//정보
            res.send(data)
        }
        else{
            console.log(err)
        }
    })
})

app.get('/store_2030_info', (req,res)=>{
    console.log('/store_2030_info')
    db.query("select * from store_2030_info",(err, data) =>{
        if(!err){
            console.log({place: data})//정보
            res.send(data)
        }
        else{
            console.log(err)
        }
    })
})

app.listen(PORT, ()=>{
    console.log(`Server On : http://localhost:${PORT}`)
})