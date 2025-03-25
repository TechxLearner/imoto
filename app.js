
const express = require("express");
const app = express();

const path = require("path");
// const ejsMate = require("ejs-mate");


app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "/public")));



//Home Route
app.get("/", (req, res) => {
    res.render("index.ejs");
});
app.get("/home", (req, res) => {
    res.render("index.ejs",);
});


app.listen(5050, () => {
    console.log("server is listening to port 5050");
});
