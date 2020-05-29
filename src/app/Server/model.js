const mongoose= require('mongoose');
const productSchema = new mongoose.Schema({
    name: String,
    price: String,
    description: String,
    category: String,
})
const employee = module.exports = mongoose.model('products',productSchema);