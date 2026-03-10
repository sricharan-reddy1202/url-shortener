const express = require("express");
const connectDB = require("./config/db");
const urlRoutes = require("./routes/urlRoutes");

const app = express();

const PORT = 5000;

connectDB();

app.use(express.json());

app.use("/", urlRoutes);

app.get("/", (req, res) => {
  res.send("URL Shortener API Running");
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});