const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Dummy database of users (replace this with your database)
const users = [
  { username: 'admin', password: 'password' },
  // Add more users as needed
];

// Login endpoint
app.post('/login', (req, res) => {
  const { username, password } = req.body;

  // Check if the provided credentials match any user in the database
  const user = users.find(user => user.username === username && user.password === password);

  if (user) {
    // Redirect the user to the dashboard upon successful login
    res.redirect('/dashboard');
  } else {
    // If login fails, redirect back to the login page
    res.redirect('/login');
  }
});

// Dashboard endpoint
app.get('/dashboard', (req, res) => {
  // Serve the dashboard HTML file
  res.sendFile(__dirname + '/dashboard.html');
});

// Serve login page
app.get('/login', (req, res) => {
  // Serve the login HTML file
  res.sendFile(__dirname + '/login.html');
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
