var mongoose=require('mongoose')

var Schema=mongoose.schema

var userSchema=new Schema({
  password:{Type:String,minlength:5,maxlength:20},
  createdAt:{Type:Date, default: new Date()}
})