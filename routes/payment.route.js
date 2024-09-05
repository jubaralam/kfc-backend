const express = require('express');
const paymentRouter = express.Router();
const PaymentModel = require('../models/payment.model');

// Create a new payment
paymentRouter.post('/create', async (req, res) => {
    try {
        const { order_id, user_id, amount, status, payment_method, transaction_id } = req.body;

        const newPayment = new PaymentModel({
            order_id,
            user_id,
            amount,
            status,
            payment_method,
            transaction_id
        });

        const savedPayment = await newPayment.save();
        res.status(201).json(savedPayment);
    } catch (error) {
        res.status(500).json({ message: 'Error creating payment', error });
    }
});



// Get payment by ID
paymentRouter.get('/get/:id', async (req, res) => {
    try {
        const payment = await PaymentModel.findById(req.params.id).populate('order_id user_id');
        if (!payment) return res.status(404).json({ message: 'Payment not found' });
        res.status(200).json(payment);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching payment', error });
    }
});

// Update payment status
paymentRouter.put('/update/:id', async (req, res) => {
    try {
        const { status } = req.body;
        const updatedPayment = await PaymentModel.findByIdAndUpdate(
            req.params.id,
            { status, updated_at: Date.now() },
            { new: true }
        );
        if (!updatedPayment) return res.status(404).json({ message: 'Payment not found' });
        res.status(200).json(updatedPayment);
    } catch (error) {
        res.status(500).json({ message: 'Error updating payment', error });
    }
});

// Delete payment
paymentRouter.delete('/remove/:id', async (req, res) => {
    try {
        const deletedPayment = await PaymentModel.findByIdAndDelete(req.params.id);
        if (!deletedPayment) return res.status(404).json({ message: 'Payment not found' });
        res.status(200).json({ message: 'Payment deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Error deleting payment', error });
    }
});

module.exports = paymentRouter;
