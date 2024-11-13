const express = require("express")
const errorHandler = require("./src/middlewares/errorhandler")
const dotenv = require("dotenv").config()

const app = express()

const PORT = process.env.PORT

app.use(express.json())
app.use("/api/v1/artists", require("./src/routes/artists/artistsRoute"))
app.use(errorHandler)

app.listen(PORT, () => {
    console.log(`Nhuzik Server Running on ${PORT}`);
    
})