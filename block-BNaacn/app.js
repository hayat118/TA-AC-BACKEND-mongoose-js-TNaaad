var express=require('express')
var logger=require('morgan')
// var cookieParser=require('cookie-parser')

mongoose.connect("mongodb://localhost:27017/app",(err)=>{
  console.log(err?err:"connected to database")
})

var app=express();

// middleware
app.use(logger())
app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.use((req,res,next)=>{
  res.cookie("username","xyz");
  next();
})

// routes
app.get('/',(req,res)=>{
  res.send('Welcome')
})
app.get('/users',(req,res)=>{
  res.send('user page')
})

//error
app.use((req,res,next)=>{
  res.send('Page not find')
}) 


// 
app.listen(7000,()=>{
  console.log('We are listening on port 7k')
})

