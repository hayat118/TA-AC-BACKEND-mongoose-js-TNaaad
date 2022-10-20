var express=require('express')
var mongoose=require('mongoose')
var logger=require('morgan')
var User=require('./models/users')

mongoose.connect("mongodb://localhost:27017/sample",(err)=>{
  console.log(err?err:"connected true")
})

var app=express();
// middleware
app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({extended:false}))




// routes
app.get('/',(req,res)=>{
  res.send('Welcome to express')
})
app.post('/users',(req,res)=>{
  // console.log(req.body)
  User.create(req.body,(err,user)=>{
   console.log(err)
   res.json(user)
  })
})

app.get('/users',(req,res)=>{
  User.find({   "name": "sam1"},(err,user)=>{
    console.log(err)
    res.json({products:user})
  })
})

app.get('/users/:id',(req,res)=>{
  var id=req.params.id;
  User.findById(id,(err,user)=>{
    console.log(err);
    res.send(user)
  })
})

app.delete('/users/:id',(req,res)=>{
  var userId=req.params.id;
  User.findByIdAndDelete(userId,(err,user)=>{
    console.log(err)
    res.send("user deleted")
  })
})




// error
app.use((req,res,next)=>{
  res.send('Page not found')
})


app.listen(3000,()=>{
  console.log('server is listening on port 3k')
})