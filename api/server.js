// server.js
const express = require('express');
const mysql = require('mysql');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();

app.use(cors());
app.use(bodyParser.json());

// MySQL connection
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'mysql',
  database: 'dashboard_db',
});

connection.connect((err) => {
  if (err) throw err;
  console.log('Connected to MySQL database.');
});

// Fetch all menus
app.get('/menus', (req, res) => {
  connection.query('SELECT * FROM dashboard_tbl', (err, results) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ error: 'Database error' });
    }
    res.json(results);
  });
});


// Add new menu
app.post('/add-menu', (req, res) => {
  const { menu_heading, menu_name, menu_under, enable_yn } = req.body;
  const query = 'INSERT INTO dashboard_tbl (menu_heading, menu_name, menu_under, enable_yn) VALUES (?, ?, ?, ?)';
  connection.query(query, [menu_heading, menu_name, menu_under, enable_yn], (err) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ error: 'Database error' });
    }
    res.status(200).json({ message: 'Menu added successfully' });
  });
});

// Update menu
app.put('/update-menu/:menuid', (req, res) => {
  const { menuid } = req.params;
  const { menu_heading, menu_name, menu_under, enable_yn } = req.body;
  const query = 'UPDATE dashboard_tbl SET menu_heading = ?, menu_name = ?, menu_under = ?, enable_yn = ? WHERE menuid = ?';
  connection.query(query, [menu_heading, menu_name, menu_under, enable_yn, menuid], (err) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ error: 'Database error' });
    }
    res.status(200).json({ message: 'Menu updated successfully' });
  });
});

// Delete menu
app.delete('/delete-menu/:menuid', (req, res) => {
  const { menuid } = req.params;
  const query = 'DELETE FROM dashboard_tbl WHERE menuid = ?';
  connection.query(query, [menuid], (err) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ error: 'Database error' });
    }
    res.status(200).json({ message: 'Menu deleted successfully' });
  });
});
app.put('/toggle-menu/:menuid', (req, res) => {
  const { menuid } = req.params;
  const { enable_yn } = req.body;

  if (typeof enable_yn === 'undefined') {
    return res.status(400).json({ error: 'Missing enable_yn in request body' });
  }

  const query = 'UPDATE dashboard_tbl SET enable_yn = ? WHERE menuid = ?';
  connection.query(query, [enable_yn, menuid], (err) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ error: 'Database error' });
    }
    res.status(200).json({ message: 'Menu toggled successfully' });
  });
});


app.get('/menu-under-options', (req, res) => {
  const query = 'SELECT DISTINCT menu_under FROM dashboard_tbl';
  connection.query(query, (err, results) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ error: 'Database error' });
    }
    res.status(200).json(results.map(row => row.menu_under));
  });
});


app.listen(5000, () => {
  console.log('Server started on port 5000');
});
