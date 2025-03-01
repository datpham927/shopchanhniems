const mongoose = require("mongoose")

const contactSchema = mongoose.Schema({
    contact_facebook: { type: String ,default:''},
    contact_tiktok: { type: String,default:'' },
    contact_zalo: { type: Number ,default:null},
}, {
    timestamps: true
})

module.exports = mongoose.model("Contact", contactSchema)