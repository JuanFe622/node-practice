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

subject_routes.get('/:subjectId', (req, res)=>{
  const { subjectId } = req.params;
  subject_model
      .findById(subjectId)
      .then((data) => res.json(data))
      .catch((err) => res.json({message: err}));
});

subject_routes.put('/:subjectId', (req, res)=>{
  const { subjectId } = req.params;
  const { subject_name, code, credits, hours } = req.body;
  subject_model
    .updateOne({ _id: subjectId }, { $set: { subject_name, code, credits, hours } })
    .then((data) => res.json(data))
    .catch((err) => res.json({ message: err }));
});

subject_routes.delete('/:subjectId', (req, res)=>{
  const { subjectId } = req.params;
  subject_model
        .deleteOne({ _id: subjectId })
        .then((data) => res.json(data))
        .catch((err) => res.json({message: err}));
});

module.exports = subject_routes