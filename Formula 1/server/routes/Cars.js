const Router = require("express");
const router = new Router();
const CarsController = require("../controllers/CarsController");

router.post("/", CarsController.create);
router.get("/", CarsController.Check);

module.exports = router;
