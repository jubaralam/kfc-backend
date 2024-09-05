const express = require("express")
const productRouter = express.Router()
const mongoose = require('mongoose');

const ProductModel = require('../models/product.model');

productRouter.post("/add", async (req, res) => {
    const { name, type, price, description, image } = req.body
    const { _id } = req.user
    try {
        const newProduct = new ProductModel({
            name,
            type,
            price,
            description,
            image,
            user_id: _id
        });
        console.log(newProduct)
        const savedProduct = await newProduct.save();
        console.log('Product saved:', savedProduct);
        res.send({ "message": "new food has been added" })
    } catch (error) {
        res.send({ "message": "something went wrong", "error": error })

    }

})




module.exports = productRouter