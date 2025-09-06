const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.json({
    books: [],
  });
});

router.post("/:id", (req, res) => {
  const bookId = req.params?.id;
  res.json({
    bookId,
  });
});

module.exports = router;
