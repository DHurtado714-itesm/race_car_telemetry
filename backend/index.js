const express = require("express")
const cors = require("cors")
const connection = require("./server/config/db")

const app = express()
const PORT = 3000 || process.env.PORT || 4000

app.use(cors())
app.use(express.json())

// Route to get all data from the database
app.get("/", (req, res) => {
  connection.query("SELECT * FROM datos", (err, result) => {
    if (err) throw err
    res.status(200).json(result)
  })
})

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
