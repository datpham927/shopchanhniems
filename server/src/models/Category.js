const mongoose = require("mongoose")

const categorySchema = mongoose.Schema({
    category_name: { type: String },
    category_code: { type: String },
    category_thumbnail: { type: String },
}, {
    timestamps: true
})

module.exports = mongoose.model("Category", categorySchema)