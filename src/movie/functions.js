const Movie = require("./model");

exports.addMovie = async (title, actor, date) => {
    try {
        //Below - Create - mongoose method to add to database 
        //await Movie.create({ title: title, actor: actor }) - DRY version below
        //Keys title/actor match the movieSchema in model.js 
        await Movie.create({title, actor, date}); 
        return `Success! Added ${title} starring ${actor} - Released in ${date}`;
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

exports.updateMovie = async ( oldInfo, newInfo, info ) => {
    //Below - loop to change key value
    try {
        if (info == "title") {
            return await Movie.updateOne(
                { title: oldInfo },
                { title: newInfo }
            );
        } else if (info == "actor") {
            return await Movie.updateOne(
                { actor: oldInfo },
                { actor: newInfo }
            );
        } else if (info == "date") {
            return await Movie.updateOne(
                { date: oldInfo },
                { date: newInfo }
            );
        }
    } catch (error) {
        console.log(error);
    }
};

exports.deleteMovie = async (title) => {
    //Deletes an item from the database using title as reference
    try {
        const filter = { title };
        await Movie.deleteOne( filter );
        return `Deleted ${title}`;
    } catch (error) {
        console.log(error);
    }
};