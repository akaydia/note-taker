const express = require('express');
const defaultRouter = require('./default');
const notesRouter = require('./notes');

const app = express();


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

app.use('/api', notesRouter);
app.use('/', defaultRouter);

module.exports = app;
