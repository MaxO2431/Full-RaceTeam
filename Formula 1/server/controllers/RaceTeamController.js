const uuid = require("uuid");
const path = require("path");
const { RaceTeam } = require("../Models/models");
const ApiError = require("../error/ApiError");

class RaceTeamController {
  async create(req, res, next) {
    try {
      const { calling, country, role, racerId, carsId } = req.body;
      const { img } = req.files;
      let fileName = uuid.v4() + ".jpg";
      img.mv(path.resolve(__dirname, "..", "static", fileName));

      const raceteam = await RaceTeam.create({
        calling,
        country,
        role,
        racerId,
        carsId,
        img: fileName,
      });
      return res.json(raceteam);
    } catch (e) {
      next(ApiError.badRequest(e.message));
    }
  }

  async getAll(req, res) {
    const { racerId, carsId } = req.body;
    let Raceteam;
    if (!racerId && !carsId) {
      Raceteam = await RaceTeam.findAll();
    }

    if (raceId && !carsId) {
      Raceteam = await RaceTeam.findAll({ where: { raceId } });
    }

    if (!racerId && carsId) {
      Raceteam = await RaceTeam.findAll({ where: { carsId } });
    }

    if (racerId && carsId) {
      Raceteam = await RaceTeam.findAll({ where: { racerId, carsId } });
    }
    return res.json(RaceTeam);
  }

  async getOne(req, res) {}
}

module.exports = new RaceTeamController();
