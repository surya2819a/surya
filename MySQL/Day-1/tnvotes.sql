CREATE DATABASE TN_VOTE_DB;
USE TN_VOTE_DB;
CREATE TABLE Voters(
voter_id INT PRIMARY KEY auto_increment,
voter_name varchar(20),
voter_age int,
voter_gender varchar(20),
voter_district varchar(20),
voter_constitution varchar(20),
voter_party_name varchar(30),
voter_count int




);
INSERT  INTO voters(voter_name,voter_age,voter_gender,voter_district,voter_constitution,voter_party_name,voter_count) values(UPPER("vijay"),("73"),UPPER("male"),("chennai"),UPPER("kolathur"),("tvk"),("2500"));
