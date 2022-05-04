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

function displayRole() {
  db.query(
    `SELECT role.id, role.title, department.name AS department, role.salary
FROM role JOIN department
ON role.department_id = department.id
ORDER BY role.id`,
    function (err, results, fields) {
      console.table(results);
    }
  );
}

module.exports = { displayDepartment, displayRole };
