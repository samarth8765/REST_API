const express = require("express");
const app = express();

require("../db/connection.js");
const studentRouter = require("../routers/studentRoutes");
const PORT = process.env.PORT || 8000;

app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(studentRouter);

app.listen(PORT, () => {
  console.log(`Server is running at ${PORT}`);
});
