const express = require("express");
const app = express();
const port = 3000;

const connectDB = require("./DB/db");
const authRoutes = require("./Routes/auth.route"); 

app.use(express.json());

app.use("/api/auth", authRoutes);

connectDB().then(() => {
  app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
  });
});
