const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

// Serve the login page
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/login.html');
});

// Handle the login form submission
app.post('/login', (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  // Perform authentication logic
  if (username === 'your_username' && password === 'your_password') {
    // Redirect to the dashboard page upon successful login
    res.json({ redirectUrl: '/dashboard.html' });
  } else {
    // Handle failed login attempt
    res.status(401).json({ error: 'Invalid credentials' });
  }
});

// Serve the dashboard page
app.get('/dashboard.html', (req, res) => {
  res.sendFile(__dirname + '/dashboard.html');
});

// Start the server
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
