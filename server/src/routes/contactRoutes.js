const express = require("express")
const ContactControllers = require("../controllers/ContactControllers")
const router = express.Router()


router.put("/add_contact", ContactControllers.createOrUpdateContact)
router.get("/all", ContactControllers.getContact) 


module.exports = router