var mongoose=require('mongoose')

var Schema=mongoose.Schema;



 var commentSchema=new Schema({
   content:{type:String},
   author:{type:String},
   article:{type:String},
 },timestamps());

   var Comment=mongoose.model("Comment",commentSchema);
  module.exports=Comment;