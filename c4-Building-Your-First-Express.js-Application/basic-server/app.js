const express = require("express");
const app = express();

const PORT = 8080;

app.use((req, res, next) => {
  console.log("I am mw 1");
  next();
});

app.use((req, res, next) => {
  console.log("I am mw 2");
  return res.send("Terminate from m2");
  next();
});

app.get("/", (req, res) => {
  res.send("Home Page");
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
