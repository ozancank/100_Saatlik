var express = require("express");
var router = express.Router();
var jwt = require("jwt-simple");

var User = require("../models/user");

router.post("/register", (request, response) => {
  var user = new User(request.body);
  user.save((error, result) => {
    if (error) {
      console.log(error);
      return response.sendStatus(500).send({ message: error });
    }
    return response.status(201).send({ message: "Created" });
  });
});

router.post("/login", async (request, response) => {
  var userData = request.body;
  var user = await User.findOne({ email: userData.email });
  if (!user) {
    return response.Status(401).send({ message: "Email or password invalid" });
  }

  if (userData.password != user.password) {
    return response.Status(401).send({ message: "Email or password invalid" });
  }

  var payload = {};
  var token = jwt.encode(payload, "12345");
  return response.status(200).send({ token });
});

var user = {
  router,
  checkAuthenticated: (request, response, next) => {
    if (!request.header("authorization")) {
      return response
        .status(401)
        .send({ message: "Unauthorized. No Authorization Header" });
    }

    var token = request.header("authorization").split(" ")[1];
    var payload = jwt.decode(token, "12345");

    if (!payload) {
      return response
        .status(401)
        .send({ message: "Unauthorized. Token is not valid" });
    }

    next();
  },
};

module.exports = user;
