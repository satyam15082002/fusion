const express = require('express')
const app=express()
const http = require('http').createServer(app)
const io=require('socket.io')(http)
const path=require('path')
const fetch=require('node-fetch')
const { response } = require('express')
app.set('views',path.join(__dirname,'views'));
app.set('view engine','ejs');
app.use(express.static(path.join(__dirname,'upload')))

io.on('connection',async (socket)=>{
    console.log("user conn...")
    socket.on('message',data=>{
        console.log(data)
        S()
    })
})


const S=async (msg)=>{
    var url=' http://127.0.0.1:8990/api';
var response=await fetch(url)
var result=await response.json()
console.log("inside socket"+msg)
}
app.get('/',async (req,res)=>{

 var url=' http://127.0.0.1:8990/api';
var response=await fetch(url)
var result=await response.json()
res.render('s',{'data':result})
})
http.listen(1000,(err)=>{
    if(!err){
        console.log(`server started at port 1000`)
    }
})