const productRoutes = require("./productRoutes")
const userRoutes = require("./userRoutes")
const categoryRoutes = require("./categoryRoutes")
const contactRoutes = require("./contactRoutes")


const routes = (app) => {
    app.use("/api/product", productRoutes)
    app.use("/api/category", categoryRoutes)
    app.use("/api/admin", userRoutes)
    app.use("/api/contact", contactRoutes)
}
module.exports = routes