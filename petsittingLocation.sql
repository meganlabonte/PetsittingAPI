-- Creating a new database as per assignment requirement
-- The idea of this database is to hold the locations of my petsits
-- With the name of my customers, area that they live in, and distance from my own home
CREATE DATABASE IF NOT EXISTS petsitting;

USE petsitting;

CREATE TABLE IF NOT EXISTS location (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  area VARCHAR(255) NOT NULL,
  distance INT NOT NULL
);

-- Insert sample data into the location table
-- INSERT INTO location (name, area, distance) VALUES
-- ('Alice', 'Central London', 5),
-- ('Bob', 'Manchester', 15),
-- ('Carol', 'Liverpool', 20),
-- ('Dave', 'Birmingham', 30),
-- ('Eve', 'Edinburgh', 45);

-- Making sure the data has inserted correctly 
-- SELECT * FROM location;