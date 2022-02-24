const mongoose = require("mongoose");

const movieSchema = new mongoose.Schema({
    title: {
        //type can also be Number or Array for a list
        //required means something must be input
        //unique means we can't have more than one
        type: String,
        required: true,
        unique: true,
    },
    actor: {
        type: String,
        default: "Not specified",
    },
    date: {
        type: Number,
        default: "Not specified",
    },
});

const Movie = mongoose.model("Movie", movieSchema);

module.exports = Movie;