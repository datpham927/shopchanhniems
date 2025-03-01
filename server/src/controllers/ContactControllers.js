const Contact = require("../models/Contact")


const createOrUpdateContact = async (req, res) => {
    try {

        const contact = await Contact.findOneAndUpdate(req.body._id, req.body, { upsert: true })
        return res.status(201).json({
            success: contact ? true : false,
            data: contact ? contact : null,
        })

    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message
        })
    }
}


const getContact = async (req, res) => {
    try {
        const contact = await Contact.find()
        return res.status(201).json({
            success: contact ? true : false,
            data: contact ? contact : null,
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message
        })
    }
}



module.exports = { getContact, createOrUpdateContact }
