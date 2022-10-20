var mongoose=require('mongoose')

var Schema=mongoose.Schema;




var userSchema=new Schema({
   name:{type:String},
   email:{type:String, lowercase:true, match:/@/},
   age:{type:Number}
 });

  var User=mongoose.model("User",userSchema);
 module.exports=User;