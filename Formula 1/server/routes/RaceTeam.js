const Router = require("express");

const router = new Router();
const RaceTeamController = require("../controllers/RaceTeamController");

router.post("/", RaceTeamController.create);
router.post("/", RaceTeamController.getAll);
router.get("/", RaceTeamController.getOne);

module.exports = router;
