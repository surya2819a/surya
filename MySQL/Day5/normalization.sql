create database bank;

use bank;


create table customer_detail(
custoner_id int primary key auto_increment,
customer_name varchar(50) not null 
);


insert into customer_detail(customer_name) value("arun") , ("bala") , ("sai") , ("fathima");


create table account_detail(

account_id int primary key auto_increment,
customer_id int not null,
account_type varchar(20),

foreign key (customer_id) references customer_detail (custoner_id)
);


insert into account_detail (customer_id , account_type)values ( 1 , "saving") , ( 1 , "loan") , ( 2 , "saving") , ( 3 , "current") , ( 4 , "saving");


create table branch(

branch_id int primary key auto_increment,
account_id int not null,

foreign key (account_id) references account_detail (account_id)
);

insert into branch (account_id )values (2) , (3) , (1) ,(5),(4);


select customer_name , account_id from customer_detail inner join  account_detail on customer_id = account_id;
