const {PORT} = require("dotenv").config().parsed;
const express = require("express");
const app = express();

const cors = require("cors");
app.use(cors());

app.use(express.json()); //middleware

const cars = require("../routes/cars"); 
app.use("/cars", cars);


app.listen(PORT, () => 
    console.log(`Servidor rodando na porta ${PORT}...`)
);