const express = require("express");
const cookieController = require("../controllers/cookieController");

const router = express.Router();

router.post("/set-cookie", cookieController.setCookie);

module.exports = router;