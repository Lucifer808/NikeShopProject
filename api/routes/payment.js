const express = require('express');
const router = express.Router();
const stripe = require('stripe')('sk_test_51JjQqEIORC7wUZgFUM8JVaTXtnWkmcR5E2Yq6MxDuLfaz7UgUYrcikpM4nebDD91QPE5LMaGbecQhU8ij0I5vnbH004vF8WukT');

router.post('/payment', (req, res) => {
    stripe.charges.create({
        source: req.body.tokenId,
        amount: req.body.amount,
        currency: 'vnd'
    }, (stripeErr, stripeRes)=>{
        if(stripeErr){
            res.status(500).json(stripeErr);
        }else{
            res.status(200).json(stripeRes);
        }
    })
});

module.exports = router;