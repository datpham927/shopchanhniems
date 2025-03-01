const Category = require("../models/Category")
const Product = require("../models/Product")
const autoCode = require("../utils/autoCode")


const createCategory = async (req, res) => {
    try {
        const { category_name, category_thumbnail } = req.body
        if (!category_name) {
            return res.status(400).json({
                success: false,
            })
        }

        const category_code = autoCode(category_name)
        const category = await Category.create({ category_name, category_code, category_thumbnail })
        return res.status(201).json({
            success: category ? true : false,
            data: category ? category : null,
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message
        })
    }
}


const getCategory = async (req, res) => {
    try {
        const category = await Category.find()
        return res.status(201).json({
            success: category ? true : false,
            data: category ? category : null,
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message
        })
    }
}


const editCategory = async(req, res) => {
    try {
        const { _id } = req.body
        if (!_id) {
            return res.status(201).json({
                success: false,
            })
        }
        const response = await Category.findByIdAndUpdate(_id, {...req.body }, { new: true })
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
const deleteCategory = async(req, res) => {
    try {
        const { id } = req.params
        if (!id) {
            return res.status(201).json({
                success: false,
            })
        }
        const foundProduct= await Product.find({category_code:id})
        console.log(foundProduct);
        if(foundProduct.length>0){
            return res.status(201).json({
                success: false,
            })
        }
        const response = await Category.findByIdAndDelete(id)
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

module.exports = { createCategory, getCategory ,editCategory,deleteCategory}
