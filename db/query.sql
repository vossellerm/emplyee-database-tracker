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

