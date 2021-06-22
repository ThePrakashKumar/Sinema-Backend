const express = require("express");
const env = require("dotenv");
const cors = require("cors");

const connect = require("./db/connect");
const userRouter = require("./routes/user.routes");
const videoRouter = require("./routes/video.routes");
const likedRouter = require("./routes/liked.routes");
const watchLaterRouter = require("./routes/watchLater.routes");

// configuration
const app = express();
app.use(express.json());
app.use(cors());
env.config();

// connect to DB
connect();

app.get("/", function (req, res) {
    res.send("Welcome To Sinema Backend 🙂");
});

// routes
app.use("/users", userRouter);
app.use("/video", videoRouter);
// app.get("/video", (req, res) => {
//     res.json({
//         "name": "I don't know my name do you know mine ?"
//     })
// })
app.use("/liked", likedRouter);
app.use("/later", watchLaterRouter);

// listen on port 5000
app.listen(process.env.PORT || 5000, function () {
    console.log("Server Started 🙌");
});
