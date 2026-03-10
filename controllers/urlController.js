const Url = require("../models/url");
const { nanoid } = require("nanoid");

exports.createShortUrl = async (req, res) => {
  try {

    const { url } = req.body;

    const shortId = nanoid(6);

    const newUrl = new Url({
      shortId,
      originalUrl: url
    });

    await newUrl.save();

    res.json({
      shortUrl: `http://localhost:5000/${shortId}`
    });

  } catch (error) {
    res.status(500).json({ error: "Server Error" });
  }
};
exports.redirectUrl = async (req, res) => {
  try {

    const { shortId } = req.params;

    const url = await Url.findOne({ shortId });

    if (!url) {
      return res.status(404).json({ error: "URL not found" });
    }

    url.clicks++;

    await url.save();

    res.redirect(url.originalUrl);

  } catch (error) {
    res.status(500).json({ error: "Server Error" });
  }
};