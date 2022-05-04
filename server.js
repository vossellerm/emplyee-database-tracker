const inquirer = require("inquirer");
// const mysql = require("mysql2");
const cTable = require("console.table");

const { options, departments, roles, employees } = require("./js/inputs");
const {
  init,
  displayDepartment,
  displayRole,
  displayEmployee,
  addDepartment,
} = require("./js/functions");
// const { listenerCount } = require("mysql2/typings/mysql/lib/Connection");

init();
