const path = require('path');
const express = require('express');
const router = express.Router();

// GET Route for retrieving all the notes
router.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/notes.html'));
});

// GET Route to return index.html for all other routes
router.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'));
});

module.exports = router;
