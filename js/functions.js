const mysql = require("mysql2");

// Connect to database
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "mikayla1",
  database: "employees_db",
});

function displayDepartment() {
  db.query(`SELECT * FROM department`, function (err, results, fields) {
    console.table(results);
  });
}

module.exports = { displayDepartment };
