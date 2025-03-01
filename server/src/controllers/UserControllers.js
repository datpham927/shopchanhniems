const User = require("../models/User")
const bcrypt = require("bcrypt")


const userLogin = async(req, res) => {
    try {
        const { name, password } = req.body
        if (!name && !password) {
            return res.status(201).json({
                success: false,
            })
        }
        const foundAccount = await User.findOne({ name })
        if (!foundAccount) return res.status(201).json({ success: false })
        const confirmPassword = bcrypt.compareSync(password, foundAccount.password)
        if (!confirmPassword) {
            return res.status(201).json({
                success: false,
            })
        }
        return res.status(200).json({
            success: true,
            userId: foundAccount._id
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message
        })
    }
}





module.exports = { userLogin }