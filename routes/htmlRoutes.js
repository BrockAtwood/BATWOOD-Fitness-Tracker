//bring together all the htmls

//required libraries
const path = require("path");
const router = require("express").Router();

//exercise.html
router.get("/exericse", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/exercise.html"));
});

//index.html
router.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/index.html"));
});

//stats.html
router.get("/stats", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/stats.html"));
});

//exporting module
module.exports = rouuter;
