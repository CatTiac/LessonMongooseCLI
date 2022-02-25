require("./db/connection");
const mongoose = require("mongoose");
const yargs = require("yargs");
const { addMovie, listMovie, updateMovie, deleteMovie, findMovie } = require("./movie/functions");
const { addTVShow, listTVShow, updateTVShow, deleteTVShow, findTVShow } = require("./TVshows/functions");

const app = async (yargsObj) => {
    try {
        if (yargsObj.addM) {
            console.log(await addMovie(yargsObj.title, yargsObj.actor, yargsObj.date));
            //add functionality
        } else if (yargsObj.listM) {
            console.log(await listMovie());
            //list functionality
        } else if (yargsObj.updateM) {
            console.log(await updateMovie(yargsObj.oldInfo, yargsObj.newInfo, yargsObj.info));
            //update one functionality
        } else if (yargsObj.deleteM) {
            console.log(await deleteMovie(yargsObj.title));
            //delete one functionality
        } else if (yargsObj.findM) {
            console.log(await findMovie(yargsObj.title, yargsObj.actor, yargsObj.date));
            //search functionality

        } else if (yargsObj.addTV) {
            console.log(await addTVShow(yargsObj.title, yargsObj.channel, yargsObj.date));
        } else if (yargsObj.listTV) {
            console.log(await listTVShow());
        } else if (yargsObj.updateTV) {
            console.log(await updateTVShow(yargsObj.oldInfo, yargsObj.newInfo, yargsObj.info));
        } else if (yargsObj.deleteTV) {
            console.log(await deleteTVShow(yargsObj.title));
        } else if (yargsObj.findTV) {
            console.log(await findTVShow(yargsObj.title, yargsObj.channel, yargsObj.date));
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