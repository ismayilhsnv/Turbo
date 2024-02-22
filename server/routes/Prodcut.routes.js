const express = require("express")
const router = express.Router()
const { TurboController } = require("../controllers/Product.controller")
router.get("/", TurboController.getAll)
router.get("/:id", TurboController.getById)
router.post("/", TurboController.add)
router.put("/:id", TurboController.edit)
router.delete("/:id", TurboController.delete)
module.exports = router