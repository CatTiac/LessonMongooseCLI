const yargs = require("yargs");
const Movie = require("./model");

exports.addMovie = async (title, actor) => {
    try {
        //Below - Create - mongoose method to add to database 
        //await Movie.create({ title: title, actor: actor }) - DRY version below
        //Keys title/actor match the movieSchema in model.js 
        await Movie.create({title, actor}); 
        return "Success";
    } catch (error) {
        console.log(error)
    }
}

exports.list = async () => {
    //Below - Find - finds all items in the list
    try {
        return await Movie.find({});
    } catch (error) {
        console.log(error);
    }
};

exports.updateMovie = async (title, actor) => {
    //Below - Find - finds all items in the list
    try {
        const filter = { title, actor };
        const updateDoc = {
            $set: {
                title,
                actor,
            }
        }
        await Movie.updateOne( filter, updateDoc, {title, actor} );
        return "Updated";
    } catch (error) {
        console.log(error);
    }
};

exports.deleteMovie = async (title) => {
    //Deletes an item from the database
    try {
        const filter = { title };
        await Movie.deleteOne( filter );
        return "Deleted";
    } catch (error) {
        console.log(error);
    }
};