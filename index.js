require('dotenv').config(); // .env/.config as per assignment requirement

const express = require('express');
const app = express ();
const PORT = 3000;
const mysql = require("mysql2");

app.listen (PORT, () => {
console.log(`Server is running on port ${PORT}`);
});

// Basic welcome message using endpoint get
app.get (`/`, (req, res) => { 
  res.send ( 'Welcome to my petsit location api!');
});

app.use(express. json()); // Middleware to parse JSON bodies

// connecting to mysql database 
const pool = mysql.createPool({
  host: process.env.DB_HOST,   // MySQL server host
  user: process.env.DB_USER,         // MySQL user
  password: process.env.DB_PASSWORD, // MySQL password
  database: process.env.DB_NAME,  // MySQL database name
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

// Retrieve all locations using endpoint get
app.get('/locations', (req, res) => {
  const sql = 'SELECT * FROM location';
  
  pool.query(sql, (err, results) => {
    if (err) {
      console.error('Error fetching locations:', err.message);
      return res.status(500).json({ error: 'Database error' });
    }
    
    res.status(200).json(results);
  });
});

// Create a new location using endpoint post
app.post('/create-location', (req, res) => {
  const { name, area, distance } = req.body;

  const sql = "INSERT INTO location (name, area, distance) VALUES (?, ?, ?)";
  pool.query(sql, [name, area, distance], (err, result) => {
      if (err) {
          console.error('Error inserting location:', err.message);
          return res.status(500).json({ error: "Database Error" });
      }
      res.status(201).json({ id: result.insertId, message: `Location for ${name} created successfully` });
  });
});

// Update an existing location using endpoint put
app.put('/update-location/:id', (req, res) => {
  const locationId = req.params.id;
  const { name, area, distance } = req.body;
  
  const sql = 'UPDATE location SET name = ?, area = ?, distance = ? WHERE id = ?';
  pool.query(sql, [name, area, distance, locationId], (err, result) => {
    if (err) {
      console.error('Error updating location:', err.message);
      return res.status(500).json({ error: 'Database error' });
    }
    
    if (result.affectedRows === 0) {
      return res.status(404).json({ error: 'Location not found' });
    }
    
    res.status(200).json({ message: 'Location updated successfully' });
  });
});

// Delete an existing location using endpoint delete
app.delete('/delete-location/:id', (req, res) => {
  const locationId = req.params.id;
  
  const sql = 'DELETE FROM location WHERE id = ?';
  pool.query(sql, [locationId], (err, result) => {
    if (err) {
      console.error('Error deleting location:', err.message);
      return res.status(500).json({ error: 'Database error' });
    }
    
    if (result.affectedRows === 0) {
      return res.status(404).json({ error: 'Location not found' });
    }
    
    res.status(200).json({ message: 'Location deleted successfully' });
  });
});

//I was having access issues so console.logged to find out the user
//console.log(process.env.DB_USER);