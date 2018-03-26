require("dotenv").load();
const queries = require("./queries");

const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
// const multer = require("multer");
// const multerS3 = require("multer-s3")

// const AWS = require("aws-sdk");
// const accessKeyId = process.env.AWS_ACCESS_KEY;
// const secretAccessKey = process.env.AWS_SECRET_KEY;

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/featured", (req, res) => {
  queries
    .listFeatures()
    .then(features => {
      res.json(features);
    })
    .catch(console.error);
});

app.get("/poetry", (req, res) => {
  queries
    .listPoetry()
    .then(poetry => {
      res.json(poetry);
    })
    .catch(console.error);
});

app.get("/fiction", (req, res) => {
  queries
    .listFiction()
    .then(fiction => res.json(fiction))
    .catch(console.error);
});

app.get("/visualart", (req, res) => {
  queries
    .listArt()
    .then(art => res.json(art))
    .catch(console.error);
});

app.get("/all-submissions", (req, res)=>{
  queries 
    .listSubmissions()
    .then(subs => res.json(subs))
    .catch(console.error)
})

app.get("/all-submissions/:type", (req, res)=>{
  queries
    .listSubmissionsByType(req.params.type)
    .then(subs => res.json(subs))
    .catch(console.error)
})

app.get("/xxx/:id", (request, response) => {
  queries
    .read(request.params.id)
    .then(game => {
      game
        ? response.json({
            game
          })
        : response.sendStatus(404);
    })
    .catch(console.error);
});

app.post("/xxx", (request, response) => {
  queries
    .create(request.body)
    .then(game => {
      response.sendStatus(201).json({
        game
      });
    })
    .catch(console.error);
});

app.delete("/xxx/:id", (request, response) => {
  queries
    .delete(request.params.id)
    .then(() => {
      response.sendStatus(204);
    })
    .catch(console.error);
});

app.put("/xxx/:id", (request, response) => {
  queries
    .update(request.params.id, request.body)
    .then(game => {
      response.json({
        game
      });
    })
    .catch(console.error);
});

app.use((request, response) => {
  response.sendStatus(404);
});

module.exports = app;
