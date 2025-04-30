const express =require("express")
const router= express.Router();
const course=require("../Model/courses");



router.post("/",async (req,res)=>{
    const CourseData=new course({
        title: req.body.title,
        company: req.body.company,
        location: req.body.location,
        category: req.body.category,
        aboutCompany:req.body.aboutCompany,
        aboutCourse:req.body.aboutCourse,
        Whocanapply: req.body.Whocanapply,
        perks: req.body.perks,
        AdditionalInfo:req.body.AdditionalInfo,
        StartDate:req.body.StartDate,
    })
    await CourseData.save().then((data)=>{
        res.send(data)
    }).catch((error)=>{
        console.log(error,"not able to post the course")
    })
})

router.get("/",async (req,res)=>{
    try {
        const data=await course.find();
        res.json(data) .status(200)
    } catch (error) {
        console.log(error);
        res.status(404).json({error:"Internal server error "})
    }
})


router.get("/:id", async (req,res)=>{
    const {id}=req.params;
    try {
        const data=await course.findById(id);
        if (!data) {

             res.status(404).json({error:"Course is not found "})
        }
        res.json(data) .status(200)
    } catch (err) {
        console.log(err);
        res.status(404).json({error:"Internal server error "})
    }
})
module.exports=router