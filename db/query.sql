-- SELECT <columns>
-- FROM <left_table>
-- JOIN <right_table>
-- ON <left_table>.<column> = <right_table>.<column>;

-- view all departments
SELECT * FROM department;

-- view all roles
SELECT role.id, role.title, department.name AS department, role.salary
FROM role JOIN department
ON role.department_id = department.id
ORDER BY role.id;

-- view all employees
SELECT employee.id, employee.first_name, employee.last_name, role.title AS title, department.name AS department, role.salary, employee.manager_id AS manager
FROM employee 
INNER JOIN role ON role.id = employee.role_id
INNER JOIN department ON department.id = role.department_id
-- JOIN role ON role.id = employee.manager_id
ORDER BY employee.id;