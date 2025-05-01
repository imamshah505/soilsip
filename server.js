const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const apiRoutes = require('./routes/api');

const app = express();
const PORT = 3000; // You can change this if needed

// Middleware
app.use(cors()); // Allows frontend to talk to backend
app.use(bodyParser.json()); // Parses JSON bodies

// Routes
app.use('/api', apiRoutes);

// Start the server
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
