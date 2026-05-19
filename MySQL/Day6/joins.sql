-- task 1
-- Create:students table , courses table Insert some students without course. Using INNER JOIN: Show student name and course name.

create database course ;

use course;

create table course(

course_id int primary key auto_increment,
course_name varchar(50) 

);

insert into course (course_name) values ("java" ),( "python" ),( "MERN") , ("cloud");


create table student(

student_id int primary key,
student_name varchar(30),
course_id int,

foreign key (course_id) references course(course_id)

);

INSERT INTO student (course_id, student_name, student_id) VALUES
(1, 'Arun Kumar', 101),
(2, 'Priya Sharma', 102),
(3, 'Rahul Verma', 103),
(4, 'Sneha Reddy', 104),
(4, 'Karthik Raj', 105),
(3, 'Divya Nair', 106),
(3, 'Vikram Singh', 107),
(1, 'Anjali Das', 108),
(2, 'Suresh Babu', 109),
(2, 'Meena Patel', 110);

INSERT INTO student (course_id, student_name, student_id) VALUES (null , "kamesh" , 111) , (null , "vicky" , 112) ;
select course_name, from course inner join student on course.course_id = student.course_id;


-- Task 2
-- Using LEFT JOIN:
-- Show all students with their student_namecourse names.
-- If course not assigned, show NULL.


select student_name,course_name from student left join course on student.course_id = course.course_id;



