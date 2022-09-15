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
  new_person = person_model(req.body);
  new_person
    .save()
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      res.json(err);
    });
});

person_routes.get("/person", (req, res) => {
    person_model
    .find()
    .then((data) => {
        res.json(data);
      })
      .catch((err) => {
        res.json(err);
      });
});

person_routes.get("/person/:personId", (req, res) => {
  const { personId } = req.params;
  person_model
    .findById(personId)
    .then((data) => res.json(data))
    .catch((err) => res.json({message: err}));
});

person_routes.put("/person/:personId", (req, res) => {
  const { personId } = req.params;
  const { username, lastname, age, email } = req.body;
  person_model
    .updateOne({ _id: personId }, { $set: { username, lastname, age, email } })
    .then((data) => res.json(data))
    .catch((err) => res.json({ message: err }));
});

person_routes.delete("/person/:personId", (req, res) => {
  const { personId } = req.params;
  person_model
        .deleteOne({ _id: personId })
        .then((data) => res.json(data))
        .catch((err) => res.json({message: err}));
});


module.exports = person_routes;
