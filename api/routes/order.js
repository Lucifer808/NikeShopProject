const express = require('express');
const router = express.Router();
const {verifyToken, authorization, authorizationAdmin} = require('./verifyToken');
const Order = require('../models/Order');

// Create Order
router.post('/', verifyToken, async (req, res) => {
    const newOrder = new Order(req.body);
    try{
        const addedOrder = await newOrder.save();
        res.status(200).json(addedOrder);
    }catch(err) {
        res.status(500).json(err);
    }
})


// Update Order
router.put('/:id', authorizationAdmin , async (req, res) =>{
    try{
        const updatedOrder = await Order.findByIdAndUpdate(req.params.id, {
            $set: req.body
        }, {new: true});
        res.status(200).json(updatedOrder);
    }catch(err){
        res.status(500).json(err);
    }
})

// Delete Order
router.delete('/:id', authorizationAdmin, async (req, res) =>{
    try{
        await Order.findByIdAndDelete(req.params.id)
        res.status(200).json('Đã hủy bỏ đơn hàng')
    }catch(err){
        res.status(500).json(err);
    }
})

// Get User Order
router.get('/find/:id',authorizationAdmin, async (req, res) =>{
    try{
        const order = await Order.findById(req.params.id);
        res.status(200).json(order);
    }catch(err){
        res.status(500).json(err);
    }
})

// Get All Order
router.get('/', authorizationAdmin, async (req, res) =>{
    try{
        const orders = await Order.find();
        res.status(200).json(orders);
    }catch(err){
        res.status(500).json(err);
    }
})

// Get monthly income
router.get('/income', authorizationAdmin, async (req, res) =>{
    const date = new Date();
    const lastMonth = new Date(date.setMonth(date.getMonth() - 1));
    const prevMonth = new Date(new Date().setMonth(lastMonth.getMonth() - 1));
    try{
        const income = await Order.aggregate([
            {$match: { createdAt: {$gte: prevMonth}}},
            {
                $project: {
                    month: {$month: "$createdAt"}, sales: "$amount"
                },
            },
            {
                $group: {
                    _id: "$month",
                    total: {$sum: "$sales"}
                }
            }
        ]);
        res.status(200).json(income);
    }catch(err){
        res.status(500).json(err);
    }
})
module.exports = router;