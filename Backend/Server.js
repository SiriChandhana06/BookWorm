const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 3001;

// Connect to MongoDB (Make sure you have MongoDB installed and running)
mongoose.connect('mongodb+srv://sirisiri3006:Siri Chandhana Kotha@cluster0.wby1aah.mongodb.net/Bookworm', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Create a user schema
const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  username: String,
  password: String,
});

const User = mongoose.model('User', userSchema);

// Middleware
app.use(cors()); // Add this line to enable CORS
app.use(bodyParser.json());

// Route for user signup
app.post('/signup', async (req, res) => {
  const { name, email, username, password } = req.body;

  try {
    // Check if the user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ error: 'User with this email already exists' });
    }

    // Create a new user
    const newUser = new User({ name, email, username, password });
    
    // Save the user to the database
    await newUser.save();

    res.status(200).json({ message: 'User created successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
