const express = require('express');
const app = express();
const PORT = 5000; // Choose a port number for your backend server

// Define your routes here
app.get('/', (req, res) => {
  res.send('Hello from the backend server!');
});

// Start the server
app.listen(PORT, () => {
  console.log(`Backend server is running on port ${PORT}`);
});
