CREATE DATABASE college_db;

USE college_db;

CREATE TABLE students (

id int PRIMARY KEY,
name VARCHAR(20) NOT NULL,
age int ,
course VARCHAR(20)


);

ALTER TABLE students rename COLUMN id to stud_id;
ALTER TABLE students RENAME TO students_class ;

ALTER TABLE students_class MODIFY stud_id VARCHAR(20);
ALTER TABLE students_class ADD grade int ;
ALTER TABLE students_class DROP column grade;

Drop database ddl;
drop table world.city;
DROP DATABASE world;