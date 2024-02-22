const { Images } = require("../models/ElaveImage.model")

const ElaveImages = {
    getAll: async (req, res) => {
        try {
            const target = await Images.find({})
            res.send(target)
        } catch (error) {
            res.send("item is not a fount")
        }
    },
    getById: async (req, res) => {
        try {
            const { id } = req.params
            const image = await Images.findById(id)
            res.send(image)
        } catch (error) {
            res.send("item is not a fount")
        }
    },
    add: async (req, res) => {
        try {
            const newProduct = new Images({...req.body})
            await newProduct.save() 
            res.send(newProduct)
        } 
        catch (error) {
            res.send("item is not posted")
        }
    },
    deleteİmg: async (req, res) => {
        try {
            const { id } = req.params
            const image = await Images.findByIdAndDelete(id)
            res.send(image)
        } catch (error) {
            res.send("item is not a fount")
        }
    },
}
module.exports = { ElaveImages }