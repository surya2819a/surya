CREATE DATABASE election_db;
use election_db;
CREATE TABLE district(
district_id INT PRIMARY KEY auto_increment,
district_name VARCHAR(50)


);
CREATE TABLE constitution(
constitution_id INT PRIMARY KEY auto_increment,
constitution_name varchar(30)


);

CREATE TABLE party(
party_id INT PRIMARY KEY auto_increment,
party_symbol varchar(30),
party_name varchar(30)


);

CREATE TABLE candidate(
candidate_id INT PRIMARY KEY auto_increment,
candidate_name varchar(30),
candidate_mobile INT,
candidate_email varchar(30),
candidate_gender varchar(30),
candidate_constitution varchar(30),
candidate_party_name varchar(30)

);

CREATE TABLE result(





);

