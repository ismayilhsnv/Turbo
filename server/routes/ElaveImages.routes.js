const express=require("express")
const router=express.Router()
const { ElaveImages } = require("../controllers/ElaveImages.controller")

router.get("/",ElaveImages.getAll);
router.get("/:id",ElaveImages.getById);
router.post("/",ElaveImages.add)
router.delete("/:id",ElaveImages.deleteİmg)

module.exports=router