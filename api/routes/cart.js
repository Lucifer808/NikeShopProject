const express = require('express');
const router = express.Router();
const {verifyToken, authorization, authorizationAdmin} = require('./verifyToken');
const Cart = require('../models/Cart');

// Create Cart
router.post('/', verifyToken, async (req, res) => {
    const newCart = new Cart(req.body);
    try{
        const addedCart = await newCart.save();
        res.status(200).json(addedCart);
    }catch(err) {
        res.status(500).json(err);
    }
})


// Update Cart
router.put('/:id', authorization , async (req, res) =>{
    try{
        const updatedCart = await Cart.findByIdAndUpdate(req.params.id, {
            $set: req.body
        }, {new: true});
        res.status(200).json(updatedCart);
    }catch(err){
        res.status(500).json(err);
    }
})

// Delete Cart
router.delete('/:id', authorization, async (req, res) =>{
    try{
        await Cart.findByIdAndDelete(req.params.id)
        res.status(200).json('Đã hủy bỏ giỏ hàng')
    }catch(err){
        res.status(500).json(err);
    }
})

// Get User Cart
router.get('/find/:id', authorization, async (req, res) =>{
    try{
        const cart = await Cart.findById(req.params.id);
        res.status(200).json(cart);
    }catch(err){
        res.status(500).json(err);
    }
})

// Get All Cart
router.get('/', authorizationAdmin, async (req, res) =>{
    try{
        const carts = await Cart.find();
        res.status(200).json(carts);
    }catch(err){
        res.status(500).json(err);
    }
})
module.exports = router;