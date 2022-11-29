const mySQL = require("mysql")
const connection = mySQL.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "iot",
})

try {
  connection.connect(() => {
    console.log("Connected to MySQL")
  })
} catch (err) {
  console.log(err)
}

module.exports = connection
