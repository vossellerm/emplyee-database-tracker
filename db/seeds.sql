INSERT INTO department (name)
VALUES ("Engineering"),
("Finance"),
("Legal"),
("Sales");

INSERT INTO role (title, department_id, salary)
VALUES ("Sales Lead", 4, 100000),
("Salesperson", 4, 80000),
("Lead Engineer", 1, 150000),
("Software Engineer", 1, 120000),
("Account Manager", 2, 160000),
("Accountant", 2, 125000),
("Legal Team Lead", 3, 250000),
("Lawyer", 3, 190000);

INSERT INTO employee (role_id, first_name, last_name, manager_id)
VALUES (1, "John", "Doe", NULL),
(2, "Mike", "Chan", 1),
(3, "Ashley", "Rodriguez", NULL),
(4, "Kevin", "Tupik", 3),
(5, "Kunal", "Singh", NULL),
(6, "Malia", "Brown", 5),
(7, "Sarah", "Lourd", NULL),
(8, "Tom", "Allen", 7);