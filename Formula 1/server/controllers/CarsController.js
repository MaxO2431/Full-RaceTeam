const { Cars } = require("../Models/models");
const ApiError = require("../error/ApiError");

class CarsController {
  async create(req, res) {}
  async Check(req, res, next) {
    const { id } = req.query;
    if (!id) {
      next(ApiError.badRequest("Не задан id авто"));
    }
    res.json(id);
  }
}

module.exports = new CarsController();
