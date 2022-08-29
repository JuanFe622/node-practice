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
person_routes.get("/:personId", (req, res) => {});
person_routes.put("/:personId", (req, res) => {});
person_routes.delete("/:personId", (req, res) => {});

module.exports = person_routes;
