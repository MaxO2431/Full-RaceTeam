const Router = require("express");
const router = new Router();
const RacerController = require("../controllers/RacerController");

router.post("/", RacerController.create);
router.get("/", RacerController.getAll);

module.exports = router;
