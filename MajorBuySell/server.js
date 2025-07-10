const express = require('express');
const mongoose = require('mongoose');
const app = express();
const port = 3000;

const connectDB = require("./DB/db");

connectDB()
.then(() => {
  app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
  });
})