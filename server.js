const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes");
require('dotenv').config();

const PORT = process.env.PORT || 3000;

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect("mongodb+srv://root:rootroot@cluster0.evuwj.mongodb.net/fitnessTracker?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
});

app.use(routes);

app.listen(PORT, () => {
    console.log(`App running on port ${PORT}!`);
});