const express = require('express');
const path = require('path');
// Import routers
const api = require('./routes/index');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware for parsing request body as JSON
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

// Middleware for routes
app.use('/api', api);

// GET route for homepage
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "./public/index.html"));
});

// Start the server
app.listen(PORT, () => {
  console.log(`App listening on: http://localhost:${PORT}`);
});