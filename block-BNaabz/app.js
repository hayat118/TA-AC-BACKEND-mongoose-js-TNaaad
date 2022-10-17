var express=require('express')
var logger=require('morgan')
var mongoose=require('mongoose')


mongoose.connect("mongoose://localhost:27017/app",(err)=>{
  console.log(err?err:"connected to database")
})

var app=express()
// 
app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({extended:false}))

// 
app.get('/',(req,res)=>{
  res.send('Welcome')
})
app.get('/users',(req,res)=>{
  res.send('Users page')
})

// 
app.listen(3000,()=>{
  console.log('We are listening on port 3k')
})