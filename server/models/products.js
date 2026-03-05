const mongoose = require(`mongoose`)

let productsSchema = new mongoose.Schema(
{
    name: {type: String},
    category: {type: String},
    price: {type: Number},
    stock: {type: Number},
    images: [{type: String}]
},
{
    collection: `products`
})

module.exports = mongoose.model(`products`, productsSchema)