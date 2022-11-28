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
    /*     connection.query("SELECT * FROM datos", (err, result) => {
      // if (err) throw err 
      console.log(result)
    }) */
  })
} catch (err) {
  console.log(err)
}

module.exports = connection
