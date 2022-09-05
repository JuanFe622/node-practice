const express = require("express");
const person_model = require("../models/person.model");
const person_routes = express.Router();

// Solicitudes HTTP
// GET : Listar : No recibe Parametro
// POST : Crear nuevo registro : No recibe Parametro
// --------------------------------------------------------
// GET{id} : Ver información detallada : Recibe Parametro (id)
// PUT{id} : Actualizar registro existente : Recibe Parametro (id)
// DELETE{id} : Eliminar registro existente : Recibe Parametro (id)

person_routes.post("/person", (req, res) => {
  person_model = person_model(req.body);
  new_person
    .save()
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      res.json(err);
    });
});

person_routes.get("/", (req, res) => {
    person_model
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


module.exports = person_routes;
