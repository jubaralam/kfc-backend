const mongoose = require('mongoose');

// Define the schema for the product
const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    type: {
        type: String,
        enum: ['Veg', 'Non Veg'],
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    // imageUrl: {
    //     type: String, // If you're storing the image URL
    //     required: true,
    // },
    // Alternatively, use this if you're storing the image as binary data (Buffer)
    image: {
        data: Buffer,
        contentType: String,
    }
    
    
, 
    user_id: { type: mongoose.Types.ObjectId, required: true }
});

// Create the model from the schema
const ProductModel = mongoose.model('Product', productSchema);

module.exports = ProductModel;
