const mongoose=require("mongoose")

const Images=mongoose.model("Images", new mongoose.Schema({
    hyundaiImages: { type: String, required: true },
    mercedesImages:{ type: String, required: true },
    bmwImages:{ type: String, required: true },
    audiImages:{ type: String, required: true },
    volkswagenImages:{ type: String, required: true },
    volvoImages:{ type: String, required: true },
    jeepImages:{ type: String, required: true }
}))
module.exports={Images}