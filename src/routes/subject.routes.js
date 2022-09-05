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

person_routes.get("/:personId", (req, res) => {
  const { personId } = req.params;
  person_model
    .findById(personId)
    .then((data) => res.json(data))
    .catch((err) => res.json({message: err}));
});

person_routes.put("/:personId", (req, res) => {
  const { personId } = req.params;
  const { username, lastname, age, email } = req.body;
  person_model
    .updateOne({ _id: personId }, { $set: { username, lastname, age, email } })
    .then((data) => res.json(data))
    .catch((err) => res.json({ message: err }));
});

person_routes.delete("/:personId", (req, res) => {
  const { personId } = req.params;
  person_model
        .deleteOne({ _id: personId })
        .then((data) => res.json(data))
        .catch((err) => res.json({message: err}));
});


module.exports = subject_routes