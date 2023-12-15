const { Racer } = require("../Models/models");
const ApiError = require("../error/ApiError");

class RacerController {
  async create(req, res) {
    const { name, country, winners } = req.body;
    const racer = await Racer.create({
      name,
      country,
      winners,
    });
    return res.json(racer);
  }
  async getAll(req, res) {
    const racers = await Racer.findAll();
    return res.json(racers);
  }
}

module.exports = new RacerController();
