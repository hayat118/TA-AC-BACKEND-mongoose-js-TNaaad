var mongoose=require('mongoose')

var Schema=mongoose.schema

var userSchema= new Schema({
  name:{Type:String},
  email:{Type:String , lowercase:true},
  age:{Type:Number , default:0},
  favourites:[String],
  marks:[Number],
  password:{Type:String, minlength:5, maxlength:15},
  createdAt:{Type:Date, default:new Date()}
})

var articleSchema=new Schema({
  title:{Type:String},
  description:{Type:String}
})


var User=mongoose.model('User',userSchema);

model.exports=User;