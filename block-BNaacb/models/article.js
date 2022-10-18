var mongoose=require('mongoose')

var schema=mongoose.schema;

var userSchema= new schema({
  title:String,
  description:String
})