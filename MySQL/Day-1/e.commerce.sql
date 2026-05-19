 CREATE DATABASE ECOMMERCE;
 USE ECOMMERCE;
 
 CREATE TABLE customer(
 customer_id INT PRIMARY KEY auto_increment,
 customer_name varchar(30),
 customer_city varchar(30)
 
 
 );
 insert into customer(customer_name,customer_city) values("surya","thirunelveli"),("sathish","chennai"),("suruttu","sivakasi"),("leon","tirupur"),("gowtham","bangalore");
 
 CREATE TABLE orders(
 order_id INT PRIMARY KEY auto_increment,
 product_name varchar(30),
 product_amount int,
 customer_id int,
 
 
 foreign key(cus_id) references user_customer(customer_id)
 
 );
 
 insert into orders(product_name,product_amount,customer_id) values("soap",20,1),("shampoo",30,5);
 
 
 
 

 