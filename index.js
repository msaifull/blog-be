const express = require("express");

const app = express();

app.use(() => {
  console.log("hello server...");
  console.log("hello server ke 2...");
  console.log("hello server ke 3...");
});

app.listen(4000);
