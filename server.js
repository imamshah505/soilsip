const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const apiRoutes = require('./routes/api');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors()); // Allows frontend to talk to backend
app.use(bodyParser.json()); // Parses JSON bodies

// Routes
app.use('/api', apiRoutes);

// Optional: root route to test Render
app.get("/", (req, res) => {
    res.send("Backend is running");
  });

// Start the server
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
