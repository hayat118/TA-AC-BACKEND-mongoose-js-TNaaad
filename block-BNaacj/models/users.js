var mongoose=require('mongoose')

var Schema=mongoose.schema

var userSchema=new Schema({
  password:{Type:String,min:5,max:20}
})