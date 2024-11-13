const express = require("express")
const dotenv = require("dotenv").config()

const app = express()

const PORT = process.env.PORT

app.use("/api/v1/artists", require("./src/routes/artists/artistsRoute"))

app.listen(PORT, () => {
    console.log(`Nhuzik Server Running on ${PORT}`);
    
})