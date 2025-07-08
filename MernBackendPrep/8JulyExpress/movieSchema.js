const mongoose = require("mongoose");

const movieSchema = new mongoose.Schema({
  title: String,
  year: Number,
  rated: String,
  runtime: Number,
  countries: [String],
  tomatoes: {
    viewer: {
      rating: Number,
      numReviews: Number,
      meter: Number,
    },
    critic: {
      rating: Number,
      numReviews: Number,
      meter: Number,
    },
  }
}, { collection: "movies" });

module.exports = mongoose.model("Movie", movieSchema);
