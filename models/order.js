const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const FoodSchema = new mongoose.Schema({
    user_id: String,
    user_name: String,
    phone_number: String,
    address: String,
    notes: String,
    total_price: String,
    foods: Array,   //array chứa các obj món ăn     {id_food, title, note, total, price, total_price}
    time: String,   //nếu có dv cinema thì time sẽ lưu giá trị suất chiếu, ngược lại thì trống
    Create: Date,


});

// const Food = mongoose.model('food', FoodSchema)
// module.exports = Food;

module.exports = mongoose.models.Order || mongoose.model('Order', FoodSchema);

// return mongoose.models[Food] 
//     ? mongoose.model(Food)
//     : mongoose.model('food', FoodSchema)