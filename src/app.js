require("./db/connection");
const mongoose = require("mongoose");
const yargs = require("yargs");
const { addMovie, list, updateMovie, deleteMovie } = require("./movie/functions");

const app = async (yargsObj) => {
    try {
        if (yargsObj.add) {
            console.log(await addMovie(yargsObj.title, yargsObj.actor, yargsObj.date));
            //add functionality
        } else if (yargsObj.list) {
            console.log(await list());
            //list functionality
        } else if (yargsObj.update) {
            console.log(await updateMovie(yargsObj.oldInfo, yargsObj.newInfo, yargsObj.info));
            //update one functionality
        } else if (yargsObj.delete) {
            console.log(await deleteMovie(yargsObj.title));
            //delete one functionality
        } else {
            console.log("Incorrect command");
        }
        //Below - makes app disconnect from database once it has ran
        await mongoose.disconnect();
    } catch (error) {
        console.log(error);
    }
}

app(yargs.argv);