const mysql = require("mysql2");
const inquirer = require("inquirer");
const { options, departments, roles, employees } = require("./inputs");

const initialQuestion = {
  type: "list",
  name: "initialPrompt",
  message: "What would you like to do?",
  choices: options,
};

function init() {
  inquirer.prompt(initialQuestion).then((response) => {
    const answer = response;
    switch (JSON.stringify(Object.values(answer))) {
      case '["' + options[0] + '"]':
        return displayDepartment();
      case '["' + options[1] + '"]':
        return displayRole();
      case '["' + options[2] + '"]':
        return displayEmployee();
      case '["' + options[3] + '"]':
        return addDepartment();
      case '["' + options[4] + '"]':
        return console.log(answer);
      case '["' + options[5] + '"]':
        return console.log(answer);
      case '["' + options[6] + '"]':
        return console.log(answer);
    }
  });
}

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
    return init();
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
      return init();
    }
  );
}

function displayEmployee() {
  db.query(
    `SELECT employee.id, employee.first_name, employee.last_name, role.title AS title, department.name AS department, role.salary, employee.manager_id AS manager
FROM employee
INNER JOIN role ON role.id = employee.role_id
INNER JOIN department ON department.id = role.department_id
ORDER BY employee.id`,
    function (err, results, fields) {
      console.table(results);
      return init();
    }
  );
}

function addDepartment() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "department",
        message: "Name your new department.",
      },
    ])
    .then((response) => {
      db.query(
        `INSERT INTO department (name)
    VALUES (?)`,
        JSON.stringify(Object.values(response)),
        function (err, results, fields) {
          departments.push(response);
          console.log(departments);
          return init();
        }
      );
    });
}

module.exports = {
  init,
};
