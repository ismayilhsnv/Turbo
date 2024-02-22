const mongoose = require("mongoose")
const Turbo = mongoose.model("Turbo", new mongoose.Schema({
    marka: { type: String, },
    price: { type: Number, },
    categories: [{ type: String, }],
    desc: { type: String, },
    situation: { type: String, },
    image: { type: String, },
    duration: { type: String, },
    type: { type: String, },
    city: { type: String, },
    payment: { type: String, },
    year: { type: Number, },
    color: { type: String, },
    fuel: { type: String, },
    transmitter: { type: String, },
    speedBox: { type: String, },
    capacity: { type: Number },
    master: { type: Number, },
    places: { type: Number, },
    market: { type: String, },
    strike: { type: String, },
    uncolor: { type: String, },
    injured: { type: String, },
    status: { type: String, },
    yürüş: { type: Number, },
    index: { type: Number }
}))
module.exports = { Turbo }