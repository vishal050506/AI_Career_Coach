const express =require("express")
const router= express.Router();
const roadmap=require("../Model/Roadmap");



router.post("/",async (req,res)=>{
    const roadmapData=new roadmap({
        title: req.body.title,
        category: req.body.category,
        path: req.body.path,
        StartDate:req.body.StartDate,
    })
    await roadmapData.save().then((data)=>{
        res.send(data)
    }).catch((error)=>{
        console.log(error,"not able to post the course")
    })
})

router.get("/",async (req,res)=>{
    try {
        const data=await roadmap.find();
        res.json(data) .status(200)
    } catch (error) {
        console.log(error);
        res.status(404).json({error:"Internal server error "})
    }
})


router.get("/:id", async (req,res)=>{
    const {id}=req.params;
    try {
        const data=await roadmap.findById(id);
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