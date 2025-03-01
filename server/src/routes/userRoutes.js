const express = require("express")
const UserControllers = require("../controllers/UserControllers")
const router = express.Router()


router.post("/login", UserControllers.userLogin)


module.exports = router