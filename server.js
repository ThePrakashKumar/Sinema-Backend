const express = require("express");
const env = require("dotenv");

const connect = require("./db/connect");
const userRouter = require("./routes/user.routes");

// configuration
const app = express();
app.use(express.json());
env.config();

// connect to DB
connect();

app.get("/", function (req, res) {
    res.send("Welcome To Sinema Backend 🙂");
});

// routes
app.use("/users", userRouter);

// listen on port 5000
app.listen(5000, function () {
    console.log("Server Started 🙌");
});
