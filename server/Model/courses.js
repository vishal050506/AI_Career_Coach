const mongoose=require("mongoose")
 const  CoursesShcema=new mongoose.Schema({
    title: String,
    company: String,
    location: String,
    category: String,
    aboutCompany:String,
    aboutCourse:String,
    Whocanapply: String,
    perks: Array,
    AdditionalInfo:String,
    StartDate:String,
    createAt:{
        type:Date,
        default:Date.now,
    },
 })
 module.exports=mongoose.model("Courses",CoursesShcema)    