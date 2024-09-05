const express = require('express');
const mongoose = require('mongoose');
const OrderModel = require('../models/order.model'); // Make sure this path is correct based on your project structure

const orderRouter = express.Router();

// GET: Fetch all orders
orderRouter.get('/', async (req, res) => {
    try {
        const orders = await OrderModel.find().populate('user_id').populate('items.product_id');
        res.status(200).json(orders);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching orders', error });
    }
});

// POST: Add a new order
orderRouter.post('/add', async (req, res) => {
    try {
        const { user_id, items, total_price, status, payment_status } = req.body;

        const newOrder = new OrderModel({
            user_id,
            items,
            total_price,
            status,
            payment_status
        });

        const savedOrder = await newOrder.save();
        res.status(201).json(savedOrder);
    } catch (error) {
        res.status(500).json({ message: 'Error creating order', error });
    }
});

// PATCH: Update an existing order
orderRouter.patch('/update/:id', async (req, res) => {
    try {
        const orderId = req.params.id;
        const updates = req.body;


        const updatedOrder = await OrderModel.findByIdAndUpdate(orderId, updates, { new: true });

        if (!updatedOrder) {
            return res.status(404).json({ message: 'Order not found' });
        }

        res.status(200).json(updatedOrder);
    } catch (error) {
        res.status(500).json({ message: 'Error updating order', error });
    }
});

// DELETE: Remove an order
orderRouter.delete('/remove/:id', async (req, res) => {
    try {
        const orderId = req.params.id;
        const deletedOrder = await OrderModel.findByIdAndDelete(orderId);

        if (!deletedOrder) {
            return res.status(404).json({ message: 'Order not found' });
        }

        res.status(200).json({ message: 'Order removed successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Error removing order', error });
    }
});

module.exports = orderRouter;
