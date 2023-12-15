const { Race } = require("../Models/models");
const ApiError = require("../error/ApiError");

class RaceController {
  async create(req, res) {
    const { calling, place, date } = req.body;
    const race = await Race.create({
      calling,
      place,
      date,
    });
    return res.json(race);
  }
  async getAll(req, res) {
    const race = await Race.findAll();
    return res.json(race);
  }
}

module.exports = new RaceController();
