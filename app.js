const queries = require("./queries");

const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const multer = require("multer");

const AWS = require("aws-sdk");
const accessKeyId = process.env.AWS_ACCESS_KEY;
const secretAccessKey = process.env.AWS_SECRET_KEY;

const fs = require("fs");
const PDFParser = require("pdf2json");
const uuidv4 = require("uuid/v4");
const path = require("path");

let pdfParser = new PDFParser();

// AWS.config.update({
//   accessKeyId: accessKeyId,
//   secretAccessKey: secretAccessKey
// });

// var bucket = new AWS.S3({
//   params: {
//     Bucket: "all-submissions"
//   }
// });

// function uploadToS3(file, destFileName, callback) {
//   bucket
//     .upload({
//       ACL: "public-read",
//       Body: fs.createReadStream(file.path),
//       Key: destFileName.toString(),
//       ContentType: "application/octet-stream"
//     })
//     .send(callback);
// }

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post("/tester", multer({ dest: "./uploads" }).any(), (req, res) => {
  console.log(req.files);

  if (!req.files || req.files.length > 1) {
    return res
      .status(403)
      .send("expects only 1 file.")
      .end();
  }
  console.log("it's happening");
  res.sendStatus(200);
});

// var file1 = req.files.file;

// var pid = "10000" + parseInt(Math.random() * 10000000);

// uploadToS3(file1, pid, function (err, data) {
//   if (err) {
//     console.error(err);
//     return res
//       .status(500)
//       .send("failed to upload to s3")
//       .end();
//   }
//   res
//     .status(200)
//     .send(
//       "File uploaded to S3: " +
//       data.Location.replace(/</g, "&lt;") +
//       '<br/><img src="' +
//       data.Location.replace(/"/g, "&quot;") +
//       '"/>'
//     )
//     .end();
// });
//   }
// );

app.get("/tester", (req, res) => {
  queries
    .listFeatures()
    .then(features => {
      res.json(features);
    })
    .catch(console.error);
});

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
