const mongoose=require("mongoose")
 const  roadmapShcema=new mongoose.Schema({
    title: String,
    category: String,
    path: [String],
    createAt:{
        type:Date,
        default:Date.now,
    },
 })
 module.exports=mongoose.model("Roadmaps",roadmapShcema)   