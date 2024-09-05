const express = require("express")
const server = express()
server.use(express.json())

//cors for cross origin access routes
const cors = require("cors")
server.use(cors())

// dotenv configration 
const dotenv = require("dotenv").config()

//PORT number for local running
const PORT = process.env.PORT || 5500

// db connection 
const connection = require("./config/db")


//user router
const userRouter = require("./routes/user.route")
server.use("/api/user", userRouter)

// auth middleware for checking user is registered on not
const AuthMiddleware = require("./middleware/auth.middleware")
const ProductMiddleware = require("./middleware/product.middleware")

// product route for all products
const productRouter = require("./routes/productRoute")
server.use("/api/product", [AuthMiddleware, ProductMiddleware], productRouter)

// product open routes

const openRouter = require("./routes/openRoutes")
server.use("/api/products/get", openRouter)

//cart routes
const cartRouter = require("./routes/cart.route")
server.use("/api/user/cart", AuthMiddleware, cartRouter)


// routes for order
const orderRouter = require("./routes/order.route")
server.use("/api/user/order", AuthMiddleware, orderRouter)



// for address routes
const addressRouter = require("./routes/address.route")
server.use("/api/user/address", AuthMiddleware, addressRouter)


// payment routes
const paymentRouter = require("./routes/payment.route")
server.use("/api/user/payment", AuthMiddleware, paymentRouter)


// review routes
const reviewRouter = require("./routes/review.model")
server.use("/api/user/review", AuthMiddleware, reviewRouter)


server.listen(PORT, async () => {
    try {
        await connection
        console.log(`server is running on PORT: ${PORT} and db has also connected`)

    } catch (error) {
        console.log("something went wrong server starting", error)

    }
})