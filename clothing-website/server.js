// server.js
const express = require('express');
const app = express();
const path = require('path');
const mongoose = require('mongoose');
const { User, Product } = require('./models');
const port = process.env.PORT || 5000;

// Connect to MongoDB
mongoose.connect('mongodb+srv://akashmandal6297:S35Px04goYpsvTJs@cluster0.xwdlcdu.mongodb.net/?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

// Serve the static files from the React app
app.use(express.static(path.join(__dirname, 'client/build')));

// Handle requests that are not for the API
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'client/build/index.html'));
});

// API routes
app.get('/api/users', (req, res) => {
  User.find({}, (err, users) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.send(users);
    }
  });
});

app.get('/api/products', (req, res) => {
  Product.find({}, (err, products) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.send(products);
    }
  });
});

app.post('/api/users', (req, res) => {
  const { name, email, password } = req.body;
  const user = new User({ name, email, password });
  user.save((err, savedUser) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.send(savedUser);
    }
  });
});

app.post('/api/products', (req, res) => {
  const { name, price, description } = req.body;
  const product = new Product({ name, price, description });
  product.save((err, savedProduct) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.send(savedProduct);
    }
  });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
