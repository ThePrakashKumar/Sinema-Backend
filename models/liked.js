const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const LikedSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },
    likedVideo: [
        {
            video: { type: Schema.Types.ObjectId, ref: "Video" },
        },
    ],
});

const Liked = mongoose.model("LikedSchema", Liked);
module.exports = Liked;
