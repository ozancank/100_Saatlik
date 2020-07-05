var express = require("express");
var mongoose = require("mongoose");
var bodyParser = require("body-parser");
var cors=require('cors');


var author = require("./services/authorService");
var user = require("./services/userService");

var app = express();

app.use(bodyParser.json());

mongoose.connect(
  "mongodb+srv://ozancank:Ozan123456@cluster0.mpggx.mongodb.net/teacherbase?retryWrites=true&w=majority",
  { useNewUrlParser: true, useUnifiedTopology: true },
  (error) => {
    if (!error) {
      console.log("Connected to db");
    }
  }
);

app.use(cors());
app.use("/author", author.router);
app.use("/user", user.router);

app.listen(8080);
