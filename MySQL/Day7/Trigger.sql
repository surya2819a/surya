-- Task 1
-- Create AFTER INSERT trigger for students table.


create database triggertask;

use triggertask;

create table detail(

roll_no int primary key auto_increment,
student_name varchar(30),
course varchar(50)

);

create table savedata(

id int primary key auto_increment,
student_name varchar(50),
course varchar(50),
created_at datetime
);


delimiter $$ 

create trigger after_insert_stud 
after insert
on detail
for each row 

begin
insert into savedata (student_name , course , created_at) values (new.student_name , new.course , now() ); 
end$$

delimiter ; 

insert into detail (student_name,course) values ("kamesh","java");


