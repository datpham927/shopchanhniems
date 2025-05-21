const express = require("express")
const cors = require("cors")
const bodyParser = require("body-parser")
const mongoose = require("mongoose")
const routes = require("./routes")
require("dotenv").config()


const app = express()
app.use(cors([process.env.CLIENT_URL,process.env.ADMIN_URL]))
app.use(bodyParser.json());//để có thể truyền được chuỗi json
//để phân tích và trích xuất dữ liệu từ phần thân (body) của các yêu cầu HTTP có định dạng "x-www-form-urlencoded". Đây là một trong những loại dữ liệu phổ biến được sử dụng khi gửi dữ liệu từ một trang web HTML thông qua form.
app.use(bodyParser.urlencoded({ extended: true, limit: "10mb" }))
// Ping Redis mỗi 5 phút
setInterval(async () => {
     console.log("")
}, 2 * 60 * 1000); // 5 phút
routes(app)
mongoose.connect(process.env.MONGODB_URL)
    .then(() => console.log("connected successfully!"))
    .catch((e) => console.log("connection failed!", e))

app.listen(process.env.PORT, () => {
    console.log("Server is connected  successfully")
})
