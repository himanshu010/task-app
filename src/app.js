const express = require("express");
require("./db/mongoose");
const hbs = require("hbs");
const path = require("path");
const userRouter = require("./routers/user");
const taskRouter = require("./routers/task");

const app = express();

//defining paths for handlebars
const publicDirectoryPath = path.join(__dirname, "../public");
const viewPath = path.join(__dirname, "../templates/views");
// const partialsPath = path.join(__dirname, "../templates/partials");

//setup handlebars
app.set("view engine", "hbs");
app.set("views", viewPath);
// hbs.registerPartials(partialsPath);

//seting up static files. So that
//we don't have to give location
//of whole file present in public folder
app.use(express.static(publicDirectoryPath));
app.use(express.urlencoded());
app.use(express.json());

app.use(userRouter);
app.use(taskRouter);

module.exports = app;
