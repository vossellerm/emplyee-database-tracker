const inquirer = require("inquirer");
// const mysql = require("mysql2");
const cTable = require("console.table");

const { options, departments, roles, employees } = require("./js/inputs");
const {
  displayDepartment,
  displayRole,
  displayEmployee,
} = require("./js/functions");
// const { listenerCount } = require("mysql2/typings/mysql/lib/Connection");

const initialQuestion = {
  type: "list",
  name: "initialPrompt",
  message: "What would you like to do?",
  choices: options,
};

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
      return console.log(answer);
    case '["' + options[4] + '"]':
      return console.log(answer);
    case '["' + options[5] + '"]':
      return console.log(answer);
    case '["' + options[6] + '"]':
      return console.log(answer);
  }
});
