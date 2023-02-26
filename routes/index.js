const express = require('express');

// import modular routers
const notesRouter = require('./notes');

const app = express();

app.use('/notes', notesRouter);

module.exports = app;