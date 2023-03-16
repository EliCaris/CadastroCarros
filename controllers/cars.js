const Car = require("../dao/car");

exports.createOne = (req, res) => {
  Car.create(req.body, (err) => {
    if (!err) {
      res.status(201).send({});
    } else {
      res.status(400).send({ err });
    }
  });
};

exports.getAll = (req, res) => {
  Car.findAll((err, data) => res.send(data));
};

exports.getOne = (req, res) => {
  Car.findOne(req.params.id, (err, data) => {
    if (data) {
      res.status(200).send(data);
    } else {
      res.status(404).send({ errMsg: "car not found" });
    }
  });
};

exports.changeOne = (req, res) => {
  Car.updatePartial(req.params.id, req.body, (err) => {
    if (err) {
      res.status(400).send({ msg: err });
    } else {
      res.status(204).end();
    }
  });
};

exports.removeOne = (req, res) => {
  Car.deleteOne(req.params.id, (err) => {
    if (!err) res.status(204).end();
  });
};
