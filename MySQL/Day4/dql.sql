CREATE DATABASE tn_vote_db;

use tn_vote_db;
CREATE TABLE voter (

voter_id INT PRIMARY KEY auto_increment,
voter_name VARCHAR(20) not null,
age INT,
gender varchar(10),
district varchar(30) not null,
constitution varchar(30) not null,
party_name varchar(10) unique ,
vote_count int 

);

ALTER table voter modify voter_name varchar(100);
alter table voter add party_name varchar(20);
ALTER table voter modify party_name varchar(10);

Alter table voter drop column party_name ;
INSERT INTO voter ( voter_name , age , gender , district , constitution , party_name , vote_count) values ( "Kanimozhi Karunanidhi" , 56 , "Female" , "Thoothukkudi" , "Thoothukkudi west" , "DMK" , 603209 ) ,  ( "Sasikanth Senthil" , 45 , "male" , "Tiruvallur" , "Minjur" , "INC" , 796956 ) ,  ( "Murasoli S." , 40 , "male" , "Thanjavur" , "north" , "DMK" , 502245 )  , ( "T.R. Baalu" , 82 , "male" , "Chennai" , "Chennai North" , "DMK" , 497333 ) , ( "Dr. Kalanidhi Veeraswamy" , 55 , "male" , "Kancheepuram" , "Sriperumbudur" , "DMK" , 758611 ) ;

INSERT INTO voter (voter_name, age, gender, district, constitution, party_name, vote_count) VALUES 
("Dayanidhi Maran", 57, "male", "Chennai", "Chennai Central", "DMK", 413848),
("T. Sumathy", 61, "female", "Chennai", "Chennai South", "DMK", 516628),
("A. Raja", 60, "male", "The Nilgiris", "Nilgiris (SC)", "DMK", 473771),
("Ganapathy Rajkumar P.", 58, "male", "Coimbatore", "Coimbatore", "DMK", 568200),
("K. Annamalai", 39, "male", "Coimbatore", "Coimbatore", "BJP", 450132),
("S. Jagathrakshakan", 75, "male", "Ranipet", "Arakkonam", "DMK", 563216),
("Tharaniventhan M.S.", 35, "male", "Tiruvannamalai", "Arani", "DMK", 500099),
("Selvam G.", 55, "male", "Kancheepuram", "Kancheepuram (SC)", "DMK", 586044),
("Kathir Anand D.M.", 49, "male", "Vellore", "Vellore", "DMK", 568692),
("Annadurai C.N.", 58, "male", "Tiruvannamalai", "Tiruvannamalai", "DMK", 547563),
("Malaiyarasan D.", 52, "male", "Kallakurichi", "Kallakurichi", "DMK", 561589),
("Selvaganapathi T.M.", 65, "male", "Salem", "Salem", "DMK", 566085),
("Matheswaran V.S.", 51, "male", "Namakkal", "Namakkal", "DMK", 462036),
("K.E. Prakash", 48, "male", "Erode", "Erode", "DMK", 562339),
("Subbarayan K.", 76, "male", "Tiruppur", "Tiruppur", "CPI", 472739),
("Eswarasamy K.", 54, "male", "Coimbatore", "Pollachi", "DMK", 533377),
("Sachithanantham R.", 53, "male", "Dindigul", "Dindigul", "CPI(M)", 670149),
("Jothimani S.", 48, "female", "Karur", "Karur", "INC", 534539),
("Durai Vaiko", 51, "male", "Tiruchirappalli", "Tiruchirappalli", "MDMK", 542241),
("Arun Nehru", 40, "male", "Perambalur", "Perambalur", "DMK", 603209);


select * from voter;

select voter_name from voter;
select voter_name,district,party_name from voter;

select * from voter where age > 30;

select * from voter where district = "chennai";

select district,avg(age) from voter group by district having avg(age) > 28;


-- Task 2
-- Fetch only candidate name and party name.
use tn_vote_db;
select voter_name from voter;

-- Task 3
-- Fetch candidates who received more than 70000 votes.

select voter_name from voter where vote_count > 70000;

-- Task 4
-- Fetch all candidates from Chennai district.

select * from voter where district = "chennai";

-- Task 5
-- Fetch candidates belonging to DMK party.

select * from voter where party_name = "dmk";

-- Task 6
-- Fetch candidates from Madurai district whose votes are above 60000.

select * from voter where district = "madurai" and vote_count > 60000;

-- Task 7
-- Sort all candidates by total votes in ascending order.

select * from voter order by vote_count ASC;

-- Task 8
-- Sort all candidates by total votes in descending order.

select * from voter order by vote_count DESC;

-- Task 9
-- Sort district names alphabetically.

select * from voter order by district asc;

-- Task 10
-- Find the total number of candidates.

select count(*) as total_no_of_candidate from voter ;

-- Task 11
-- Find total votes party-wise. 

select party_name , sum(vote_count) from voter group by party_name;

-- Task 12
-- Find average votes district-wise.

select district , avg(vote_count) from voter group by district;

-- Task 13
-- Show parties having total votes greater than 100000.

select party_name , sum(vote_count) from voter group by party_name having sum(vote_count) > 1000000;

-- Task 14
-- Find the highest votes district-wise.

select district , max(vote_count) from voter group by district order by max(vote_count) desc;

-- Task 15
-- Show districts having average votes greater than 60000.

select district , avg(vote_count) from voter group by district having avg(vote_count) > 600000 order by avg(vote_count) desc;
