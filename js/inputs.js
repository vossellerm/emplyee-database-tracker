const inputs = new Array();

inputs[0] = new Array(
  "View All Departments",
  "View All Roles",
  "View All Employees",
  "Add A Department",
  "Add A Role",
  "Add An Employee",
  "Update An Employee"
);

const options = inputs[0];

inputs[1] = new Array("Engineering", "Finance", "Legal", "Sales");

const departments = inputs[1];

inputs[2] = new Array(
  "Sales Lead",
  "Salesperson",
  "Lead Engineer",
  "Software Engineer",
  "Account Manager",
  "Accountant",
  "Legal Team Lead",
  "Lawyer"
);

const roles = inputs[2];

inputs[3] = new Array(
  ["John", "Doe", "Sales Lead"],
  ["Mike", "Chan", "Salesperson", 1],
  ["Ashley", "Rodriguez", "Lead Engineer"],
  ["Kevin", "Tupik", "Software Engineer", 3],
  ["Kunal", "Singh", "Account Manager"],
  ["Malia", "Brown", "Accountant", 5],
  ["Sarah", "Lourd", "Legal Team Lead"],
  ["Tom", "Allen", "Lawyer", 7]
);

const employees = inputs[3];

module.exports = { options, departments, roles, employees };
