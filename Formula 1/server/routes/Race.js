const Router = require("express");
const router = new Router();
const RaceController = require("../controllers/RaceController");

router.post("/", RaceController.create);
router.get("/", RaceController.getAll);

module.exports = router;
