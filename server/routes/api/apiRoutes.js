const express = require("express");
const router = express.Router();
const sampleController = require("../../controllers/sampleController");
const userController = require("../../controllers/userController");

router.use("/sample", sampleController);
router.use("/user", userController);

module.exports = router;
