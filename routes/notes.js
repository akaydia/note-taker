const notes = require('express').Router();
const { v4: uuidv4 } = require('../helpers/uuid');
const { readFromFile, readAndAppend, writeToFile } = require('../helpers/fsUtil');

// GET Route for retrieving all the notes
notes.get('/', (req, res) => {
    
    readFromFile('./db/db.json').then((data) => res.json(JSON.parse(data)));
    console.log("logging data", data);
  });

notes.post('/', (req, res) => {
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
  
      // Use a Promise to handle async behavior of file I/O
      readAndAppend(newNote, '../db/db.json')
        .then(() => {
          res.json(`Note added successfully 🚀`);
        })
        .catch((err) => {
          console.error(err);
          res.status(500).send('Error in adding note');
        });
    } else {
      res.status(400).send('Error in adding note');
    }
  });

// DELETE Route for a note
notes.delete('/:id', (req, res) => {
    console.info(`${req.method} request received to delete a note`);

    // Get the id of the note to be deleted from the request parameters
    const noteId = req.params.id;

    // Read the notes from the file
    readFromFile('./db/db.json').then((data) => {
        // Parse the JSON data to an array of notes
        const notes = JSON.parse(data);

        // Find the index of the note with the given id
        const noteIndex = notes.findIndex((note) => note.note_id === noteId);

        if (noteIndex !== -1) {
            // Remove the note from the array
            notes.splice(noteIndex, 1);

            // Write the updated notes back to the file
            writeToFile('./db/db.json', JSON.stringify(notes))
                .then(() => {
                    res.json(`Note with id ${noteId} deleted successfully 🚀`);
                })
                .catch((err) => {
                    console.error(err);
                    res.status(500).json('Error in deleting note');
                });
        } else {
            res.status(404).json(`Note with id ${noteId} not found`);
        }
    });
});

module.exports = notes;