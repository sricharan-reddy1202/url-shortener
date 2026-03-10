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