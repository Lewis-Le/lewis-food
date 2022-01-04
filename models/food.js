const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const FoodSchema = new mongoose.Schema({
    title: String,
    des: String,
    bref_des: String,
    price: String,
    total: String,
    img: String,
});

// const Food = mongoose.model('food', FoodSchema)
// module.exports = Food;

module.exports = mongoose.models.Food || mongoose.model('Food', FoodSchema);

// return mongoose.models[Food] 
//     ? mongoose.model(Food)
//     : mongoose.model('food', FoodSchema)