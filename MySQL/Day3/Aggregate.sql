CREATE DATABASE Company_DB;

USE Company_DB;

Create TABLE Employee (

emp_id int PRIMARY KEY auto_increment,
name varchar(30) ,
email varchar(30) unique ,
department varchar(30),
salary float ,
city varchar(30),
created_at datetime
 
);

Select * from employee;

INSERT INTO employee (emp_id , name , email , department , salary , city , created_at) VALUES (101 , upper("Arjun") , lower("Arjun123@gmail.com") , "Accounts" , round(23450.56) , "chennai" , now());

INSERT INTO employee ( name , email , department , salary , city , created_at) VALUES ( upper("Praveen") , lower("Praveen@gmail.com") , "Accounts" , round(23400.45) , "Coimbatore" , now());

SELECT sum(salary) from employee;

SELECT avg(salary) from employee;

SELECT max(salary) from employee;

SELECT min(salary) from employee;

 
--  Only Aggregate Functions Practice
-- Task 1
-- Find the total number of employees using COUNT().

select count(*) from company_db.employee;

-- Task 2
-- Find the total salary of all employees using SUM().
use company_db;
select sum(salary) from employee;

-- Task 3
-- Find the average salary of employees using AVG().

select avg(salary) from employee;

-- Task 4
-- Find the highest salary using MAX().

select max(salary) from employee;

-- Task 5
-- Find the minimum salary using MIN().

select min(salary) from employee;

-- Task 6
-- Find the total number of employees whose age is above 25 using COUNT().

select count(*) from employee where city = "chennai";

-- Task 7
-- Find the total salary of employees working in the Developer department using SUM().

select sum(salary) from employee where department = "Marketing";

Alter table employee add age int not null;

insert into employee (age) values (20 ),(21),(35),(24),(19),(29),(30),(23),(31),(45);

delete from employee where emp_id > 110;

set sql_safe_updates = 0;

select * from employee;




 