const express = require("express");

const app = express();

app.use(express.static("public"));

app.listen(3000);

app.get("/home-page", (request, response, next) => {
  response.sendFile(__dirname + "/views/home-page.html");
});

app.get("/about", (request, response, next) => {
  response.sendFile(__dirname + "/views/about.html");
});

app.get("/photos", (request, response, next) => {
  response.sendFile(__dirname + "/views/photos.html");
});

app.get("/works", (request, response, next) => {
  response.sendFile(__dirname + "/views/works.html");
});
