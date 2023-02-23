const router = require('express').Router();
const path = require('path');

// GET route for homepage
router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, "../public/index.html"));
});

// This is the route that will serve up notes.html
router.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, "../public/pages/notes.html"));
});

module.exports = router;