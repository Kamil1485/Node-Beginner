import express from "express";
const router=express.Router();

router.get("/",(req,res)=>{
    res.send("User Anasayfası")
})

router.get("/:slug",(req,res)=>{
    res.send(`${req.params.slug}'s profile`)
})
export default router;