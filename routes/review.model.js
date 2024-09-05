const express = require('express');
const reviewRouter = express.Router();
const ReviewModel = require('../models/review.model');

// Create a new review
reviewRouter.post('/create', async (req, res) => {
    try {
        const { user_id, product_id, rating, review } = req.body;

        const newReview = new ReviewModel({
            user_id,
            product_id,
            rating,
            review
        });

        const savedReview = await newReview.save();
        res.status(201).json(savedReview);
    } catch (error) {
        res.status(500).json({ message: 'Error creating review', error });
    }
});

// Get all reviews for a product
reviewRouter.get('/get/product/:productId', async (req, res) => {
    try {
        const reviews = await ReviewModel.find({ product_id: req.params.productId }).populate('user_id product_id');
        res.status(200).json(reviews);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching reviews', error });
    }
});

// Get a specific review by ID
reviewRouter.get('/get/:id', async (req, res) => {
    try {
        const review = await ReviewModel.findById(req.params.id).populate('user_id product_id');
        if (!review) return res.status(404).json({ message: 'Review not found' });
        res.status(200).json(review);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching review', error });
    }
});

// Update a review
reviewRouter.put('/update/:id', async (req, res) => {
    try {
        const { rating, review } = req.body;
        const updatedReview = await ReviewModel.findByIdAndUpdate(
            req.params.id,
            { rating, review, updated_at: Date.now() },
            { new: true }
        );
        if (!updatedReview) return res.status(404).json({ message: 'Review not found' });
        res.status(200).json(updatedReview);
    } catch (error) {
        res.status(500).json({ message: 'Error updating review', error });
    }
});

// Delete a review
reviewRouter.delete('/remove/:id', async (req, res) => {
    try {
        const deletedReview = await ReviewModel.findByIdAndDelete(req.params.id);
        if (!deletedReview) return res.status(404).json({ message: 'Review not found' });
        res.status(200).json({ message: 'Review deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Error deleting review', error });
    }
});

module.exports = reviewRouter;
