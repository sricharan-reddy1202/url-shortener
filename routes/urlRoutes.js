const express = require("express");

const router = express.Router();

const { createShortUrl, redirectUrl ,getAnalytics } = require("../controllers/urlController");

router.post("/shorten", createShortUrl);
router.get("/analytics/:shortId", getAnalytics);
router.get("/:shortId", redirectUrl);
module.exports = router;