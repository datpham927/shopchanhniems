const express = require("express")  
const CategoryControllers = require("../controllers/CategoryControllers")  
const router = express.Router()


router.put("/add_category",CategoryControllers.createCategory)
router.get("/get_all",CategoryControllers.getCategory)
router.put("/edit_category", CategoryControllers.editCategory)
router.delete("/delete_category/:id", CategoryControllers.deleteCategory)


module.exports = router