const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const OrderSchema = new Schema({
    userId: {type: String, required: true},
    userName: {type: String},
    userPhone: {type: String},
    userEmail: {type: String},
    products: [
        {
            productId:{type: String},
            quantity: {type: Number, default: 1},
            size: {type: String, default: 'S'},
            color: {type: String}
        }
    ],
    amount: {type: Number, required: true},
    address: {type: Object, required: true},
    status: {type: String, default: 'Pending'}
}, {timestamps: true});

module.exports = mongoose.model('Order', OrderSchema);