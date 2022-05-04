INSERT INTO department (name)
VALUES ("Engineering"),
("Finance"),
("Legal"),
("Sales");

INSERT INTO role (department_id, title, salary)
VALUES (4, "Sales Lead", 100000),
(4, "Salesperson", 80000),
(1, "Lead Engineer", 150000),
(1, "Software Engineer", 120000),
(2, "Account Manager", 160000),
(2, "Accountant", 125000),
(3, "Legal Team Lead", 250000),
(3, "Lawyer", 190000);

INSERT INTO employee (role_id, first_name, last_name, manager_id)
VALUES (1, "John", "Doe", NULL),
(2, "Mike", "Chan", 1),
(3, "Ashley", "Rodriguez", NULL),
(4, "Kevin", "Tupik", 3),
(5, "Kunal", "Singh", NULL),
(6, "Malia", "Brown", 5),
(7, "Sarah", "Lourd", NULL),
(8, "Tom", "Allen", 7);