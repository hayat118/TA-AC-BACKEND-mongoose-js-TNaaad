var express=require('express')
var mongoose=require('mongoose')
var logger=require('morgan')

var Article=require('./models/article')
var User=require('./models/user')
var Comment=require('./models/comment')



mongoose.connect("mongodb://localhost:27017/articles",(err)=>{
  console.log(err ? err:"connected true")
})

var app=express();

// middleware
app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({extended:false}))

// route
app.get('/',(req,res)=>{
  console.log('Welcome to project')
})


// error
app.use((req,res,next)=>{
  res.send('Page not found')
})
// 
app.listen(4000,()=>{
  console.log('server is listening on port 4k')
})
