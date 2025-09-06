const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.json({
    teacher: [],
  });
});

router.post("/", () => {});

module.exports = router;
