const express = require('express');
// Import routers
const api = require('./routes/index');

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware for parsing request body as JSON
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

// Middleware for routes
app.use('/api/notes', api);

// Start the server
app.listen(PORT, () => {
  console.log(`App listening on: http://localhost:${PORT}`);
});