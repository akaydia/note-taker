const defaultRouter = require('express').Router();
const path = require('path');

// GET route for homepage
defaultRouter.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, "../public/index.html"));
});

// GET route for notes page
defaultRouter.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, "../public/pages/notes.html"));
});

module.exports = defaultRouter;