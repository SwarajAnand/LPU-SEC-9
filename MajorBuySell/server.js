const express = require("express");
const app = express();
var cors = require('cors')
const port = 3000;

const connectDB = require("./DB/db");
const authRoutes = require("./Routes/auth.route");
const productRoutes = require("./Routes/product.route");

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/products", productRoutes);

// Connect DB and Start Server
connectDB().then(() => {
  app.listen(port, () => {
    console.log(`✅ Server is running on http://localhost:${port}`);
  });
});




// {
//     "message": "Login successful",
//     "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY4NzBjNGFiNTdlYjZmMWEzMDUwMmYwMSIsImlhdCI6MTc1MjQzMjk3OCwiZXhwIjoxNzUyNDQwMTc4fQ.7hP69KuvzutmkT4zUYNZP_LwB1jE63OKHzzbNsCCF2M",
//     "refreshToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY4NzBjNGFiNTdlYjZmMWEzMDUwMmYwMSIsImlhdCI6MTc1MjQzMjk3OCwiZXhwIjoxNzUzMjk2OTc4fQ.IgdfDrOTzb8-PByjkGuoPCjt4j-1JGXBRO1-IJolR8U",
//     "user": {
//         "id": "6870c4ab57eb6f1a30502f01",
//         "name": "Aman Singh",
//         "email": "aman1@gmail.com"
//     }
// }