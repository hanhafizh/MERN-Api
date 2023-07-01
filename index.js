const express = require("express");

const app = express();

app.use(() => {
  console.log("hello server...");
  console.log("nodemon successs...");
  console.log("aman frennn...");
});

app.listen(4000);
