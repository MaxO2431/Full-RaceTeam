const Router = require("express");
const router = new Router();

const CarsRouter = require("./Cars");
const RaceTeamRouter = require("./RaceTeam");
const RaceRouter = require("./Race");
const RacerRouter = require("./Racer");

router.use("/RaceTeam", RaceTeamRouter);
router.use("/Race", RaceRouter);
router.use("/Racer", RacerRouter);
router.use("/Cars", CarsRouter);

module.exports = router;
