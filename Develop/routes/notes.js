const notes = require('express').Router();
const { v4: uuidv4 } = require('uuid');
const path = require('path');
const { readFromFile, readAndAppend, writeToFile } = require('../helpers/fsUtils');

// GET Route for retrieving all the notes
notes.get('/api/notes', (req, res) => {
    console.info(`${req.method} request received for notes`);
    readFromFile('./db/db.json').then((data) => res.json(JSON.parse(data)));
}); // get

// POST Route for a new note
notes.post('/api/notes', (req, res) => {
    console.info(`${req.method} request received to add a note`);

    // Destructuring assignment for the items in req.body
    const { title, text } = req.body;

    // If all the required properties are present
    if (title && text) {
        // Variable for the object we will save
        const newNote = {
            title,
            text,
            note_id: uuidv4(),
        };

        readAndAppend(newNote, './db/db.json');
        res.json(`Note added successfully 🚀`);
    } else {
        res.error('Error in adding note');
    }
}) // post

// DELETE Route for a note
notes.delete('/api/notes/:id', (req, res) => {
    console.info(`${req.method} request received to delete a note`);

    // Destructuring assignment for the items in req.body
    const { id } = req.params;

    // If all the required properties are present
    if (id) {
        // Variable for the object we will save
        const noteID = {
            id,
        };

        readAndAppend(noteID, './db/db.json');
        res.json(`Note deleted successfully 🚀`);
    } else {
        res.error('Error in deleting note');
    }
}) // delete
    