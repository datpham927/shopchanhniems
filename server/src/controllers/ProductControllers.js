const Product = require("../models/Product")


const createProduct = async(req, res) => {
    try {
        const { product_title, product_image, product_link, category_code } = req.body
        if (!product_title || !product_image || !product_link || !category_code) {
            return res.status(400).json({
                success: false,
            })
        }
        const product = await Product.create({ product_title, product_image, product_link, category_code })
        return res.status(201).json({
            success: product ? true : false,
            data: product ? product : null,
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message
        })
    }
}

const editProduct = async(req, res) => {
    try {
        const { _id } = req.body
        if (!_id) {
            return res.status(400).json({
                success: false,
            })
        }
        const response = await Product.findByIdAndUpdate(_id, {...req.body }, { new: true })
        return res.status(201).json({
            success: response ? true : false,
            data: response ? response : null,
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message
        })
    }
}
const deleteProduct = async(req, res) => {
    try {
        const { pid } = req.params
        if (!pid) {
            return res.status(400).json({
                success: false,
            })
        }
        const response = await Product.findByIdAndDelete(pid)
        return res.status(201).json({
            success: response ? true : false,
            message: response ? "Delete success!" : `Id:${req.params.pid} not exists!`,
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message
        })
    }
}


const getProduct = async (req, res) => {
    try {
        const { category_code } = req.query
        let products;
        if(category_code){
             products = await Product.find({ category_code })

        }else{
        products = await Product.find()

        }
        return res.status(201).json({
            success: products ? true : false,
            data: products ? products : null
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message
        })
    }
}
// lượt click
const updateView = async(req, res) => {
    try {
        const { pid } = req.params
        if (!pid) {
            return res.status(400).json({
                success: false,
            })
        }
        const products = await Product.findByIdAndUpdate(pid, { $inc: { product_view: +1 } }, { new: true })
        return res.status(201).json({
            success: products ? true : false,
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message
        })
    }
}


module.exports = { createProduct, editProduct, deleteProduct, getProduct, updateView }