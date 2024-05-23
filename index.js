const express = require("express");
const app = express();
const PORT = 3000;
const fs = require("fs");

// serve static files from the styles directory
app.use(express.static("./styles"));

// Part 1: Routes, Templates, and Views

app.listen(PORT, () => {
  console.log(`Running on PORT ${PORT}`);
});
