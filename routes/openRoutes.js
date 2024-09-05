const express = require("express")
const openRouter = express.Router()
const mongoose = require('mongoose');
const ProductModel = require("../models/product.model")

openRouter.get("/", async (req, res) => {
    const query = req.query
    console.log(query)
    try {
        if (query) {
            const data = await ProductModel.find(query)

            return res.send({ "data": data })
        }
        const products = await ProductModel.find()
        res.status(201).send({ "data": products })

    } catch (error) {
        res.status(403).send({ "error": error.message })

    }
})



openRouter.get("/category", async (req, res) => {

    try {
        const categories = await ProductModel.aggregate([
            {
                $group: {
                    _id: "$category",
                    image: { $first: "$image" }
                }
            },
            {
                $project: {
                    _id: 0,
                    category: "$_id",
                    image: 1

                }
            }

        ]);

        res.status(201).send({ "data": categories })

    } catch (error) {
        res.status(403).send({ "error": error.message })
    }
})















module.exports = openRouter
