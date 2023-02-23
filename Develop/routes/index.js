const express = require('express');

// Import our modular routers for /notes and /htmlroutes
const notesRouter = require('./notes');
const defaultRouter = require('./default');

const app = express();

app.use('/notes', notesRouter);
app.use('/', defaultRouter);

module.exports = app;
