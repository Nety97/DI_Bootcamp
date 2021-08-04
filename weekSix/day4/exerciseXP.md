-- 1
-- select first_name, last_name from employees

--2
-- select DISTINCT  department_id from employees;

-- 3
-- select * from employees order by first_name desc

-- 4
-- select first_name || ' ' ||last_name, salary, salary * .15 as PF from employees

--5
-- select employee_id, first_name || ' ' ||last_name, salary from employees order by salary asc

--6 
-- select sum(salary) from employees

--7
-- select  max(salary), min(salary) from employees

--8
-- select avg(salary) from employees

--9
-- select count(employee_id) from employees

--10
-- select upper(first_name) from employees

--11
-- select left(first_name, 3) from employees

--12
-- select first_name || ' ' || last_name as full_names from employees

--13
-- select first_name, last_name, length(last_name) from employees

--14
-- SELECT * FROM employees WHERE  first_name ilike '%[0-9]%';

--15
-- select * from employees limit 10

--1
-- select first_name, last_name, salary from employees where salary between 10000 and 15000

--2
-- select first_name, last_name, hire_date from employees where extract(year from hire_date) = 1987

-- 3
-- select first_name from employees where first_name ilike '%c%' and first_name ilike '%e%'

--4


--5
-- select last_name from employees where length(last_name) = 6

--6
-- select last_name from employees where last_name LIKE '__e%'

--7
-- select job_title
-- from jobs
-- inner join employees
-- on jobs.job_id = employees.job_id
-- where employees.job_id is null
-- there is not jobs available


-- sel
--8
-- select * from from employees where last_name = 'JONES'







