const TVShow = require("./TVmodel");

exports.addTVShow = async (title, channel, date) => {
    try {
        await TVShow.create({title, channel, date}); 
        return `Success! Added ${title} showing on ${channel} - Originally released in ${date}`;
    } catch (error) {
        console.log(error)
    }
}

exports.listTVShow = async () => {
    try {
        return await TVShow.find({});
    } catch (error) {
        console.log(error);
    }
};

exports.updateTVShow = async ( oldInfo, newInfo, info ) => {
    try {
        if (info == "titleChange") {
            return await TVShow.updateOne(
                { title: oldInfo },
                { title: newInfo }
            );
            //Issue with channel - if there are more than one of e.g. BBC One,
            //this function will only update the first instance it finds
        } else if (info == "channelChange") {
            return await TVShow.updateOne(
                { channel: oldInfo },
                { channel: newInfo }
            );
        } else if (info == "dateChange") {
            return await TVShow.updateOne(
                { date: oldInfo },
                { date: newInfo }
            );
        }
    } catch (error) {
        console.log(error);
    }
};

exports.deleteTVShow = async (title) => {
    try {
        const filter = { title };
        await TVShow.deleteOne( filter );
        return `Deleted ${title}`;
    } catch (error) {
        console.log(error);
    }
};

exports.findTVShow = async (title) => {
    try {
        const tvShow = await TVShow.find({ title });
        return tvShow.map(tvShow => tvShow );

    } catch (error) {
        console.log(error);
    }
};