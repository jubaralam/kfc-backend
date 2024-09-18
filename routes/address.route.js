const express = require('express');
const mongoose = require('mongoose');
const AddressModel = require('../models/address.model');
const addressRouter = express.Router();

// CREATE: Add a new address
addressRouter.post('/add', async (req, res) => {
    const { address_line_1, address_line_2, city, state, postal_code, country } = req.body
    const { _id } = req.user
    try {
        const address = AddressModel({ user_id: _id, address_line_1, address_line_2, city, state, postal_code, country });
        await address.save();
        res.status(201).json(address);
    } catch (err) {

        res.status(400).json({ error: err.message });
    }
});





// addressRouter.get('/get', async (req, res) => {
//     try {
//         const addresses = await AddressModel.find();
//         res.status(200).json(addresses);
//     } catch (err) {
//         res.status(500).json({ error: err.message });
//     }
// });



// READ: Get a single address by ID


addressRouter.get('/get', async (req, res) => {
    const { _id } = req.user
    try {
        const address = await AddressModel.find({ user_id: _id });
        if (!address) {
            return res.status(404).json({ error: 'Address not found' });
        }
        res.status(200).json(address);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});




// UPDATE: Update an address by ID
addressRouter.put('/update/:id', async (req, res) => {
    try {
        const address = await AddressModel.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
        if (!address) {
            return res.status(404).json({ error: 'Address not found' });
        }
        res.status(200).json(address);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

// DELETE: Delete an address by ID
addressRouter.delete('/remove/:id', async (req, res) => {
    try {
        const address = await AddressModel.findByIdAndDelete(req.params.id);
        if (!address) {
            return res.status(404).json({ error: 'Address not found' });
        }
        res.status(200).json({ message: 'Address deleted successfully' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

module.exports = addressRouter;
