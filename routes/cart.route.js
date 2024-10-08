const express = require("express")
const cartRouter = express.Router()

const CartModel = require("../models/cart.model")

// get all cart items
cartRouter.get("/get", async (req, res) => {
    const { _id } = req.user
    try {
        const data = await CartModel.find({ user_id: _id })
        res.status(201).send({ "data": data })
    } catch (error) {
        res.status(403).send({ "error": error.message })

    }
})

// add cart items
cartRouter.post("/add", async (req, res) => {
    const { title, quantity, product_id } = req.body
    const { _id } = req.user
    try {

        const data = CartModel({
            title, user_id: _id, product_id, quantity
        })

        await data.save()
        res.status(201).send({ "message": "new item has been added in your cart" })

    } catch (error) {
        res.status(403).send({ "error": error.message })

    }
}
)


// update cart items
cartRouter.patch("/update/:product_id", async (req, res) => {
    const { product_id } = req.params;
    const data = req.body;
    const { _id } = req.user;

    try {

        const updatedCart = await CartModel.findOneAndUpdate(
            { product_id },
            data,
            { new: true }
        );

        if (!updatedCart) {
            return res.status(404).send({ "message": "Cart item not found" });
        }

        res.status(201).send({ "message": "Your cart has been updated", "data": updatedCart });
    } catch (error) {
        res.status(403).send({ "error": error.message });
    }
});


// delete/remove cart items from
cartRouter.delete("/remove/:product_id", async (req, res) => {
    const { product_id } = req.params;
    const { _id } = req.user; // Assuming you have user authentication

    try {
        const updatedCart = await CartModel.findOneAndUpdate(
            { user_id: _id },
            { $pull: { items: { product_id: product_id } } },
            { new: true }
        );

        if (!updatedCart) {
            return res.status(404).send({ "message": "Cart item not found" });
        }

        res.status(200).send({ "message": "Item removed from cart", "data": updatedCart });
    } catch (error) {
        res.status(500).send({ "error": error.message });
    }
});

module.exports = cartRouter