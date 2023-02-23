const express = require('express');
const app = express();
const port = 3001;

app.use(express.json());
app.use(express.static('public'));
let notes = [];

// Define API endpoints
app.get('/api/notes', (req, res) => {
    res.json(notes);
});

app.post('/api/notes', (req, res) => {
    const newNote = req.body;
    newNote.id = notes.length;
    notes.push(newNote);
    res.json(newNote);
});

app.delete('/api/notes/:id', (req, res) => {
    const id = parseInt(req.params.id);
    notes = notes.filter((note) => note.id !== id);
    res.sendStatus(204);
});

// Serve index.html file
app.get('/notes', (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
});

app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
});