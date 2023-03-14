require("dotenv").config()
const express = require("express")
const cors = require("cors")
const mongoose = require("mongoose")
const PostRoutes = require("./routes/post.routes")

const app = express()
app.use(cors())
app.use(express.json())

app.get('/', (req, res) => {
  res.send("Hello! Welcome to Flamingo Server")
})

PostRoutes(app)

const PORT = process.env.PORT
app.listen(PORT, () => {
  console.log(`Server up and running`)
  try {
    mongoose.connect(process.env.DB_URL)
    console.log("Connected to DB")
  } catch (error) {
    console.log("Unable to connect", error)
  }
})