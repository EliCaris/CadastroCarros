const db = require("../infra/connection");
const { ulid } = require("ulid");

class Car {
  create(data, callback) {
    const { brand, model, year, price, caracteristic } = data;

    const sql = `INSERT INTO cars
                (id, brand, model, year, price, caracteristic) 
                  VALUES 
                  ('${ulid()}', '${brand}', '${model}', '${year}', '${price}', '${caracteristic}')`;

    db.run(sql, callback);
  }

  findAll(callback) {
    const sql = `SELECT * FROM cars`;
    db.all(sql, callback);
  }

  findOne(id, callback) {
    const sql = `SELECT * FROM cars WHERE id = '${id}'`;
    db.get(sql, callback);
  }

  deleteOne(id, callback) {
    const sql = `DELETE FROM cars WHERE id = '${id}'`;
    db.run(sql, callback);
  }

  updatePartial(id, data, callback) {
    let carData = Object.entries(data);
    let fields = [];
    for (let i = 0; i < carData.length; i++) {
      fields.push(`${carData[i][0]} = '${carData[i][1]}'`);
    }

    const sql = `UPDATE cars SET 
                    ${fields.join(",")}
                WHERE
                    id = '${id}'`;

    db.run(sql, callback);
  }
}

module.exports = new Car();