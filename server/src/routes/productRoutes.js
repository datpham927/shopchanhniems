const express = require("express")
const ProductControllers = require("../controllers/ProductControllers")
const router = express.Router()


router.put("/add_product", ProductControllers.createProduct)
router.put("/edit_product", ProductControllers.editProduct)
router.delete("/delete_product/:pid", ProductControllers.deleteProduct)
router.get("/get_all", ProductControllers.getProduct)
router.post("/update_view/:pid", ProductControllers.updateView)


module.exports = router