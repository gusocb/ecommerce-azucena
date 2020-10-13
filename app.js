const express = require("express");
const mongoose = require("mongoose");
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

//Server Port
const port = process.env.PORT || 8000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

//Routes
app.use("/api", require("./routes/user"));
