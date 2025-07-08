const express = require("express");
const app = express();
const mongoose = require("mongoose");
const port = 3000;
const router = express.Router();

mongoose
  .connect(
    "mongodb+srv://swrjnnd1:uFENsRm2ivQDrOL5@cluster0.ehb5a4p.mongodb.net/sample_mflix?retryWrites=true&w=majority&appName=Cluster0"
  )
  .then(() => {
    console.log("DB Connected");
  })

const Movie = require("./movieSchema");


app.get("/", (req, res) => {
  res.send("Hello World!");
});

// GET /movies - Get all movies (limit to 10 for demo)
app.get("/movie", async (req, res) => {
  try {
    const movies = await Movie.find().limit(10);
    console.log
    res.json(movies);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.use(express.json());

app.get("/getData", (req, res) => {
    const data = req.body;

    console.log(data);

    res.json(data);
})

app.get("/:id", async (req, res) => {
  try {
    const movie = await Movie.findById(req.params.id);
    if (!movie) return res.status(404).json({ message: "Movie not found" });
    res.json(movie);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});


    app.listen(port, () => {
      console.log(`Example app listening on port ${port}`);
    });
  
