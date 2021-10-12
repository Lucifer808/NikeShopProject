const express = require('express');
const app = express();
const mongoose = require('mongoose');
const db = require('./src/config/database/index');
const userRoute = require('./routes/user');
const authRoute = require('./routes/auth');
const productRoute = require('./routes/product');
const cartRoute = require('./routes/cart');
const orderRoute = require('./routes/order');
const paymentRoute = require('./routes/payment');
const dotenv = require('dotenv');
const cors = require('cors');

dotenv.config();
db.connect();
app.listen(5000, ()=>{
    console.log('Server listening on 5000');
})

app.use(cors());
app.use(express.json());
app.use('/api/auth', authRoute);
app.use('/api/users', userRoute);
app.use('/api/products', productRoute);
app.use('/api/carts', cartRoute);
app.use('/api/orders', orderRoute);
app.use('/api/checkout', paymentRoute);