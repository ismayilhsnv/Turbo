const { Turbo } = require("../models/Product.model")
const TurboController = {
    getAll: async (req, res) => {
        try {
            const target = await Turbo.find({})
            res.send(target)
        } catch (error) {
            res.send("item is not a fount")
        }
    },
    getById: async (req, res) => {
        try {
            const {id}=req.params
            const alinino = await Turbo.findById(id)
            res.send(alinino)
        } catch (error) {
            res.send("item is not a fount")
        }
    },
    add: async (req, res) => {
        try {
            const {marka,price,categories,desc,situation,image,type,city,payment,year,color,fuel,transmitter,speedBox,capacity,master,places,market,strike,uncolor,status,yürüş,index}=req.body
            const newProduct=new Turbo({marka,price,categories,desc,situation,image,type,city,payment,year,color,fuel,transmitter,speedBox,capacity,master,places,market,strike,uncolor,status,yürüş,index})
            await newProduct.save()
            res.send(newProduct)
        } catch (error) {
            res.send("item is not posted")
        }
    },
    edit: async (req, res) => {
        try {
           const {id}=req.params
           const {marka,price,categories,desc,image,type,city,payment,year,color,fuel,transmitter,speedBox,capacity,master,places,market,strike,uncolor,status,yürüş,index}=req.body
           await Turbo.findByIdAndUpdate(id,{marka,price,categories,desc,image,type,city,payment,year,color,fuel,transmitter,speedBox,capacity,master,places,market,strike,uncolor,status,yürüş,index})
           res.send("item updated")
        } catch (error) {
            res.send("item is not a fount")
        }
    },
    delete: async (req, res) => {
        try {
           const {id}=req.params
           const deletedData= await Turbo.findByIdAndDelete(id)
           res.send(deletedData)
        } catch (error) {
            res.send("item is not a fount")
        }
    },
    
}
module.exports={TurboController}