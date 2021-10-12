const express = require('express');
const router = express.Router();
const {verifyToken, authorization, authorizationAdmin} = require('./verifyToken');
const Product = require('../models/Product');

// Create product
router.post('/', authorizationAdmin, async (req, res) => {
    const newProduct = new Product(req.body);
    try{
        const addedProduct = await newProduct.save();
        res.status(200).json(addedProduct);
    }catch(err) {
        res.status(500).json(err);
    }
})


// Update User
router.put('/:id', authorizationAdmin , async (req, res) =>{
    try{
        const updatedProduct = await Product.findByIdAndUpdate(req.params.id, {
            $set: req.body
        }, {new: true});
        res.status(200).json(updatedProduct);
    }catch(err){
        res.status(500).json(err);
    }
})

// Delete Product
router.delete('/:id', authorizationAdmin, async (req, res) =>{
    try{
        await Product.findByIdAndDelete(req.params.id)
        res.status(200).json('Sản phẩm đả được xóa')
    }catch(err){
        res.status(500).json(err);
    }
})

// Get Product
router.get('/find/:id', async (req, res) =>{
    try{
        const product = await Product.findById(req.params.id);
        res.status(200).json(product);
    }catch(err){
        res.status(500).json(err);
    }
})

// Get all product
router.get('/', async (req, res) =>{
    const queryNew = req.query.new;
    const queryCategory = req.query.category;
    try{
        let products;
        if(queryNew){
            products = await Product.find().sort({ createdAt: -1}).limit(1);
        }else if(queryCategory){
            products = await Product.find({ categories: {
                $in: [queryCategory]
            }})
        }else{
            products = await Product.find();
        }
        res.status(200).json(products);
    }catch(err){
        res.status(500).json(err);
    }
})
module.exports = router;