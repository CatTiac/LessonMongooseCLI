const mongoose = require("mongoose");

const TVSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        unique: true,
    },
    channel: {
        type: String,
        default: "Not specified",
    },
    date: {
        type: Number,
        default: "Not specified",
    },
});

const TVShow = mongoose.model("TVShow", TVSchema);

module.exports = TVShow;