CREATE DATABASE election;
use election;

CREATE TABLE constitution (

constitution_id int primary key auto_increment,
district_name varchar(200) not null,
constitution_name varchar(200) not null,
constitution_dis_id varchar(200) not null

);

CREATE TABLE parties (

party_id int primary key auto_increment,
party_symbol varchar(200) not null,
party_name varchar(200) not null,
party_dis_number varchar(200) not null

);


CREATE TABLE candidates (

candidate_id int primary key auto_increment,
candidate_name varchar(200) not null,
candidate_age varchar(200) not null,
candidate_mobile_number varchar(200) not null,
candidate_party_name varchar(200) not null,
candidate_constitution varchar(200) not null


);





-- Insert Data

INSERT INTO constitution (district_name,constitution_name,constitution_dis_id) VALUES ("CHENNAI","VELACHERY","26"),("CHENNAI","VELACHERY","26");

UPDATE constitution SET constitution_name = "Solinganallur",constitution_dis_id="27" where constitution_id = 2;


DELETE FROM constitutionconstitution WHERE constitution_id = 3;


INSERT INTO candidates (candidate_name , candidate_age , candidate_mobile_number , candidate_party_name , candidate_constitution) VALUES ( "udhayanidhi" , "35" , "987456321" , "DMK" , "Chepak") , ( "Stalin" , "65" , "963258741" , "DMK" , "kolathur") , ( "Vijay" , "52" , "879456235" , "TVK" , "Perambur") ,( "Edapadi EPS" , "62" , "875942638" , "ADMK" , "Edapadi") , ( "Senthil Kumar" , "43" , "946879587" , "TVK" , "Thiruvottiyur");

INSERT INTO candidates (candidate_name , candidate_age , candidate_mobile_number , candidate_party_name , candidate_constitution) VALUES ( "Revanth" , "34" , "987456321" , "TVK" , "Maduravoyal") , ( "Seeman" , "56" , "897397865" , "NTK" , "Madurai west") ;

INSERT INTO candidates (candidate_name , candidate_age , candidate_mobile_number , candidate_party_name , candidate_constitution) VALUES ("Sankar" , "54" , "875963245" , "DMK" , "Royapuram");

DELETE FROM candidates where candidate_id = 8;

UPDATE candidates set candidate_party_name = "TVK" WHERE candidate_id = 2 ;

