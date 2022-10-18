var mongoose=require('mongoose')
var schema=mongoose.schema

var userSchema= new Schema({
  name:{type:String , lowercase:true},
  email:{type:String , lowercase:true},
  age:{type:Number}
})

