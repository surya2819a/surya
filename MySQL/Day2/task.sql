
SET SQL_SAFE_UPDATES = 0;

use election;

-- Create an employees table with:
-- id
-- name
-- email
-- department
-- salary

CREATE TABLE employee (
id int primary KEY auto_increment,
name varchar(20) not null ,
email varchar(30) not null unique ,
department varchar(30) not null,
salary int
);


-- Insert 5 employee records using single INSERT query.


insert into employee (id,name,email,department,salary) values (101,"kamesh","kamesh@gmail.com","Frontend" ,50000);

insert into employee (name,email,department,salary) values ("Magesh","Magesh@gmail.com","Python" ,60000),("Narayana","Narayana@gmail.com","Python" ,60000),("Praveen","Praveen@gmail.com","MERN" ,30000),("Deepak","Deepak@gmail.com","MERN" ,30000);


-- Update salary of employee whose id = 3


UPDATE employee set salary = 50000 where id =103;

-- Update department from Testing to QA.

UPDATE employee SET department = "QA" where department = "MERN"  ;

-- Increase salary by 5000 for all developers.

UPDATE employee SET salary = salary + 50000 ;

-- Update multiple columns:
-- department
-- salary

UPDATE employee SET salary = 50000 , department = "Java" where id = 101;

-- Delete employee whose id = 5.

DELETE FROM employee WHERE id = 105 ;

-- Delete employees whose salary is below 60000.

DELETE FROM employee WHERE salary <= 60000 ;

-- Delete all employee records without removing table structure.

truncate table election.employee;

-- Enable safe update mode.

SET SQL_SAFE_UPDATES = 1 ;

-- Disable safe update mode.

SET SQL_SAFE_UPDATES = 0;