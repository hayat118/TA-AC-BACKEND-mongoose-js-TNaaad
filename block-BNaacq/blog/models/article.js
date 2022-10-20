var mongoose=require('mongoose')

var Schema=mongoose.Schema;

var articleSchema=new Schema({
   title:{type:String},
   description:{type:String},
   tags:{type:String},
   likes:{type:String},
   author:{type:String},
   comments:{type:String},

},timestamps());




 

 var Article=mongoose.model("Article",articleSchema);
 module.exports=Article;



 
