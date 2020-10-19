const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");

const app = express();

require("dotenv").config();

//Database Connection
mongoose
    .connect(process.env.MONGODB_URI, {
        useNewUrlParser: true,
        useCreateIndex: true,
        useUnifiedTopology: true,
    })
    .then(() => console.log("Database Connected"));

//Middlewares
app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(cookieParser());

//Server Port
const port = process.env.PORT || 8000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

//Routes
app.use("/api", require("./routes/user"));
app.use("/api", require("./routes/category"));

