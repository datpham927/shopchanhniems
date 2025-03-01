const mongoose = require("mongoose")

const productSchema = mongoose.Schema({
    product_title: { type: String },
    product_image: { type: String },
    product_view: { type: Number, default: 0 },
    product_link: { type: String },
    category_code: { type: String },
}, {
    timestamps: true
})

module.exports = mongoose.model("Product", productSchema)