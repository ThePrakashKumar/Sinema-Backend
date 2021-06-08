const User = require("../models/user");
const Video = require("../models/video");

const getUserById = async (req, res, next, id) => {
    try {
        const user = await User.findById(id);
        if (!user) {
            res.status(400).json({
                success: false,
                message: "Couldn't Get the User With the Given Id!",
                errorMessage: err.message,
            });
        }
        req.user = user;
        next();
    } catch (err) {
        res.status(400).json({
            success: false,
            message: "Couldn't Fetch the User Data",
            errorMessage: err.message,
        });
    }
};

const getVideoByVideoId = async (req, res, next, id) => {
    try {
        const video = await Video.findById(id);
        if (!video) {
            res.status(500).json({
                message: false,
                message: "Couldn't Get the Video With the Given Id!",
                errorMessage: err.message,
            });
        }
        req.video = video;
        next();
    } catch (err) {
        res.status(400).json({
            success: false,
            message:
                "Something Went Wrong While Accessing Video With the Given Id!",
            errorMessage: err.message,
        });
    }
};

module.exports = { getUserById, getVideoByVideoId };
