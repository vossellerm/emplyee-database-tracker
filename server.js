const inquirer = require("inquirer");
const mysql = require("mysql2");
const cTable = require("console.table");

const { options, departments, roles, employees } = require("./js/inputs");

// Connect to database
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "password",
  database: "employees_db",
});

console.log(options);
