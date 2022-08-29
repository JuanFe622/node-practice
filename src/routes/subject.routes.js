const express = require("express");
const subject_model = require('../models/subject.model')
const subject_routes = express.Router()

subject_routes.post('/subject', (req, res)=>{
    subject_model = subject_model(req.body);
    new_subject
    .save()
    .then((data) => {
        res.json(data);
      })
      .catch((err) => {
        res.json(err);
      });
});
subject_routes.get('/', (req, res)=>{
    subject_model
    .find()
    .then((data) => {
        res.json(data);
      })
      .catch((err) => {
        res.json(err);
      });
});
subject_routes.get('/:subjectId', (req, res)=>{})
subject_routes.put('/:subjectId', (req, res)=>{})
subject_routes.delete('/:subjectId', (req, res)=>{})

module.exports = subject_routes