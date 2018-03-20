const express = require("express");
const cors = require("cors");
const app = express();
const queries = require("./queries");
const bodyParser = require("body-parser");

app.use(cors());
app.use(bodyParser.json());

app.post("/tester", (req, resp) => {
  resp.json(req.body);
});

app.get("/xxx", (request, response) => {
  queries
    .list()
    .then(games => {
      response.json({ games });
    })
    .catch(console.error);
});

app.get("/xxx/:id", (request, response) => {
  queries
    .read(request.params.id)
    .then(game => {
      game ? response.json({ game }) : response.sendStatus(404);
    })
    .catch(console.error);
});

app.post("/xxx", (request, response) => {
  queries
    .create(request.body)
    .then(game => {
      response.status(201).json({ game });
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
      response.json({ game });
    })
    .catch(console.error);
});

app.use((request, response) => {
  response.send(404);
});

module.exports = app;
