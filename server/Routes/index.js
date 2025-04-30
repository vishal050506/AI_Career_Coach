const express =require("express")
const router= express.Router();
const ApplicationRoute=require("./ApplicationRoute")
const intern=require("./internshipRout")
const job=require("./jobRoute")
const courses=require("./courses")
const roadmap=require("./Roadmap")
const admin=require("./admin")

router.get("/",(req,res)=>{
    res.send("the is backend")
})
router.use('/application',ApplicationRoute);
router.use('/internship',intern);
router.use('/job',job);
router.use('/courses',courses);
router.use('/roadmaps',roadmap);
router.use('/admin',admin);

module.exports=router;