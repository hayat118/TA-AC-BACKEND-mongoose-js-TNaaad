var mongoose=require('mongoose')
var Schema=mongoose.schema;

var addSchema=new Schema({
  village:String,
  city:String,
  state:String,
  pin:Number,
  user:String
})

var userSchema=new  Schema({
  user:Schema.Types.ObjectId
})