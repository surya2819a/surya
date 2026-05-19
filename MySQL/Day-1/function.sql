CREATE DATABASE company_db;
use company_db;

CREATE TABLE employees(
employ_id int PRIMARY KEY auto_increment,
employ_name varchar(200) NOT NULL,
employ_email varchar(200) NOT NULL,
employ_dept varchar(200) NOT NULL,
employ_salary varchar(200) NOT NULL,
employ_city varchar(200) NOT NULL,
employ_created_at varchar(200) NOT NULL



);


INSERT INTO employees (employ_name,employ_email,employ_dept,employ_salary,employ_city,employ_created_at) VALUES (upper("surya"),lower("SURYASTR1999@GMAIL.COM"),upper("mysql"),round(2228.45),upper("tirunelveli"),now());



select * from emp;