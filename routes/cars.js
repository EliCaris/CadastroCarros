//const {response} = require("express");
const express = require("express");
const router = express.Router(); // função construtora
const carsCtrl = require("../controllers/cars.js");

// Cadastrar um carro
router.post("/", carsCtrl.createOne);

// Recuperar Todos os carros
router.get("/", carsCtrl.getAll);

router.get("/:id", carsCtrl.getOne);

// Recuperar um Carro Específico
router.put("/:id", carsCtrl.getOne);

// Atualizar um carro
router.patch("/:id", carsCtrl.changeOne);

// Remover um carro
router.delete("/:id", carsCtrl.removeOne);

module.exports = router;