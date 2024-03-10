// server.js
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(cors());

mongoose.connect('mongodb+srv://mongomearn:mongomearn@cluster0.lhhmrza.mongodb.net/', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// User Schema
const userSchema = new mongoose.Schema({
  username: String,
  password: String,
  role: String,
});

const User = mongoose.model('User', userSchema);

// Middleware to verify JWT
const verifyToken = (req, res, next) => {
  const token = req.headers.authorization;
  if (!token) {
    return res.status(403).send('Unauthorized');
  }

  jwt.verify(token, 'secret_key', (err, user) => {
    if (err) {
      return res.status(403).send('Unauthorized');
    }
    req.user = user;
    next();
  });
};

// Routes
app.post('/api/login', async (req, res) => {
  const { username, password } = req.body;

  const user = await User.findOne({ username });

  if (!user || !bcrypt.compareSync(password, user.password)) {
    return res.status(401).send('Invalid credentials');
  }

  const token = jwt.sign({ username, role: user.role }, 'secret_key');
  res.json({ token });
});

app.get('/api/public', (req, res) => {
  res.json({ message: 'Public Page' });
});

app.get('/api/private', verifyToken, (req, res) => {
  res.json({ message: 'Private Page - Access Granted' });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

// server.js
// ... (previous code)

// Route for user registration
app.post('/api/register', async (req, res) => {
    const { username, password } = req.body;
  
    try {
      const existingUser = await User.findOne({ username });
  
      if (existingUser) {
        return res.status(400).send('Username already exists');
      }
  
      const hashedPassword = bcrypt.hashSync(password, 10);
      const newUser = new User({ username, password: hashedPassword, role: 'user' });
  
      await newUser.save();
  
      const token = jwt.sign({ username, role: newUser.role }, 'secret_key');
      res.json({ token });
    } catch (error) {
      console.error('Error registering user:', error);
      res.status(500).send('Internal Server Error');
    }
  });
  
  // ... (continue with other routes)
  // server.js
// ... (previous code)

// Route for user login
app.post('/api/login', async (req, res) => {
    const { username, password } = req.body;
  
    try {
      const user = await User.findOne({ username });
  
      if (!user || !bcrypt.compareSync(password, user.password)) {
        return res.status(401).json({ error: 'Invalid credentials' });
      }
  
      const token = jwt.sign({ username, role: user.role }, 'secret_key');
      res.json({ token });
    } catch (error) {
      console.error('Error during login:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });
  
  // Route for user registration
  app.post('/api/register', async (req, res) => {
    const { username, password } = req.body;
  
    try {
      const existingUser = await User.findOne({ username });
  
      if (existingUser) {
        return res.status(400).json({ error: 'Username already exists' });
      }
  
      const hashedPassword = bcrypt.hashSync(password, 10);
      const newUser = new User({ username, password: hashedPassword, role: 'user' });
  
      await newUser.save();
  
      const token = jwt.sign({ username, role: newUser.role }, 'secret_key');
      res.json({ token });
    } catch (error) {
      console.error('Error registering user:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });
  
  // ... (continue with other routes)
  