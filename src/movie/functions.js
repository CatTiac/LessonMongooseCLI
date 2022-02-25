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

exports.listMovie = async () => {
    //Below - Find - finds all items in the list
    try {
        return await Movie.find({});
    } catch (error) {
        console.log(error);
    }
};

exports.updateMovie = async ( oldInfo, newInfo, info ) => {
    //Below - loop to change old value to new value
    //E.g node src/app.js --updateM --info="title" --oldInfo="Spiderman" --newInfo="Spoodermoon"
    try {
        if (info == "title") {
            await Movie.updateOne(
                { title: oldInfo },
                { title: newInfo }
            );
            return `Updated movie ${info} - ${oldInfo} to ${newInfo}`;
        } else if (info == "actor") {
            await Movie.updateOne(
                { actor: oldInfo },
                { actor: newInfo }
            );
            return `Updated movie ${info} - ${oldInfo} to ${newInfo}`;
        } else if (info == "date") {
            await Movie.updateOne(
                { date: oldInfo },
                { date: newInfo }
            );
            return `Updated movie ${info} - ${oldInfo} to ${newInfo}`;
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

exports.findMovie = async (title) => {
    //Finds one item by title, returns result
    try {
        const movie = await Movie.find({ title });
        return movie.map( movie => movie );

    } catch (error) {
        console.log(error);
    }
};