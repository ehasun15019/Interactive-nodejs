const express = require("express");
const app = express();

const port = 3636;

// define all Routes
const teacherRouter = require("./routes/teacher.routes");
const bookRouter = require("./routes/books.routes");

app.use("/api/teachers", teacherRouter);

app.use("/api/books", bookRouter);

app.get("/", (req, res) => {
  res.send("Home Page");
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
