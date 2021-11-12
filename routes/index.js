const router = require("express").Router();

const apiRoutes = require("./workouts.js");
const htmlRoutes = require("./htmlRoutes");

router.use("/", htmlRoutes);
router.use("/api/workouts", apiRoutes);

module.exports = router;