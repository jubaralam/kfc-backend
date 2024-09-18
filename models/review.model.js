const mongoose = require('mongoose');

const ReviewSchema = new mongoose.Schema({
    user_id: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    product_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Product', required: true },
    rating: { type: Number, required: true, min: 1, max: 5 },
    review: { type: String, required: true },
    created_at: { type: Date, default: Date.now }
});

const ReviewModel = mongoose.model('Review', ReviewSchema);


module.exports = ReviewModel