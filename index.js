const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const personRoute = require("./src/routes/person.routes");

//Puerto de conexión
const app = express();
const port = 3000;


app.listen(port, () => {
  console.log("Running in the port ", port);
});

//middlewares
app.use(express.json());
app.use("/api", personRoute);

//Rutas del proyecto
app.get('/',(req,res) =>res.send('Welcome to my API'));

//Conexión MongoDB
mongoose
  .connect(process.env.MONGODB_CONNECTION_STRING)
  .then(() => {
    console.log("Successful connection with MongoDB");
  })
  .catch((err) => {
    console.log(err);
  });

  app.use(express.json());
