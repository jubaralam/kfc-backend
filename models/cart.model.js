const mongoose = require('mongoose');


const getLocalDate = () => {
    const currentDate = new Date();
    return new Date(currentDate.toLocaleString('en-US', { timeZone: 'Asia/Kolkata' }));
}


const cartSchema = new mongoose.Schema({
    user_id: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },

    product_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Product', required: true },
    title: { type: String, required: true },
    quantity: { type: Number, required: true, min: 1 },
    created_at: { type: Date, default: getLocalDate },
    updated_at: { type: Date, default: getLocalDate }

});

const CartModel = mongoose.model('cart', cartSchema);

module.exports = CartModel