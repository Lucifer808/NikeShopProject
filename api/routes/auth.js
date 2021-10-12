const express = require('express');
const router = express.Router();
const User = require('../models/User');
const CryptoJS = require('crypto-js');
const dotenv = require('dotenv');
const jwt = require('jsonwebtoken');
// Register
router.post('/register', async (req, res) => {
    const newUser = new User({
        username: req.body.username,
        email: req.body.email,
        password: CryptoJS.AES.encrypt(req.body.password, process.env.AUTH_PWD).toString(),
    });
    
    try{
        const userAdded = await newUser.save();
        res.status(201).json(userAdded);
    }catch(err){
        res.status(500).json(err);
    }
})
// Login
router.post('/login', async (req, res) => {
    try{
        const user = await User.findOne({username: req.body.username});
        !user && res.status(401).json('Bạn đã nhập sai tài khoản hoặc mật khẩu');
        const decryptopwd = CryptoJS.AES.decrypt(user.password, process.env.AUTH_PWD);
        const Originalpassword = decryptopwd.toString(CryptoJS.enc.Utf8);
        Originalpassword !== req.body.password && res.status(401).json('Bạn đã nhập sai tài khoản hoặc mật khẩu');
        const accessToken = jwt.sign({
            id: user._id,
            isAdmin: user.isAdmin
        },process.env.JWT_PWD, {expiresIn:'3d'});
        const {password, ...others} = user._doc;
        res.status(200).json({...others, accessToken});
    }catch(err) {
        res.status(500).send(err);
    }
})
module.exports = router;