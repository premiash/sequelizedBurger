### Schema

CREATE DATABASE burgers_db;
USE burgers_db;

CREATE TABLE burgers
(
	id int AUTO_INCREMENT,
	burger_name varchar(255) NOT NULL,
	devoured BOOLEAN DEFAULT false,
    `date` TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
	PRIMARY KEY (id)
);

select * from burgers;

DELETE FROM burgers WHERE id = 8;
DELETE FROM burgers WHERE id = 9;
DELETE FROM burgers WHERE id = 10;
DELETE FROM burgers WHERE id = 11;