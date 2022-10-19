var mongoose=requuire('mongoose')

var Schema=mongoose.Schema;

var articleSchema=new Schema({
  title:{Type:String},
  description:{Type:String},
  tags:{Type:String},
  createdAt:{Type:Date, default:Date.now()},
  likes:{Type:Number,default:0}
})

var userSchema=new Schema({
  name:{Type:String},
  email:{Type:String,lowercase:true , match:/@/},
  age:{Type:Number, default:0},
  password:{Type:Number,min:5,max:15},
  createdAt:{Type:Date, default:Date.now()},
  favourite:[String]
})

var addSchema=new Schema({
  village:{Type:String},
  city:{Type:String},
  state:{Type:String},
  pin:{Type:Number},
  userId:Schema.Types.UserId,
})

var Article=mongoose.model("Article",articleSchema)
module.exports=Article

var User=mongoose.model("User",userSchema)
module.exports=User

var Address=mongoose.model("Address",addSchema)
module.exports=Address