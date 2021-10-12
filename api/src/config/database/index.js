const mongoose = require('mongoose');

async function connect(){
    try{
        await mongoose.connect('mongodb://localhost:27017/Nike_Shop_dev',{
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log('Connect database successfully !!');
    }catch (err) {
        console.log(err);
    }
}
module.exports = {connect};