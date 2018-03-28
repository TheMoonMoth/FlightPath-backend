require("dotenv").load();
const queries = require("./queries");

const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const path = require("path");

const aws = require("aws-sdk");
const multer = require("multer");
const multerS3 = require("multer-s3");

const stripe = require("stripe")(process.env.STRIPE_PRIVATE);

const app = express();
app.use(cors());
app.use(bodyParser.json());

const s3 = new aws.S3({
  apiVersion: "2006-03-01",
  region: "us-east-1",
  credentials: {
    secretAccessKey: process.env.SECRET_ACCESS_KEY,
    accessKeyId: process.env.ACCESS_KEY_ID
  }
});

const upload = multer({
  fileFilter: function(req, file, cb) {
    let ext = path.win32.extname(file.originalname);
    if (
      ext !== ".pdf" &&
      ext !== ".PDF" &&
      ext !== ".jpg" &&
      ext !== ".JPG" &&
      ext !== ".png" &&
      ext !== ".PNG" &&
      ext !== ".jpeg" &&
      ext !== ".JPEG"
    ) {
      return cb(new Error("Unacceptable File Type"), false);
    }
    cb(null, true);
  },
  storage: multerS3({
    s3,
    bucket: "space-lane-submissions",
    key: (request, file, next) => {
      next(null, `${Date.now()}_${file.originalname}`);
    }
  })
});

app.post("/upload", upload.array("image", 1), (req, res) => {
  res.json({
    imageurl: `${req.files[0].location}`
  });
});

app.post("/submission", (req, res) => {
  console.log(req.body);
  queries
    .createSubmission(req.body)
    .then(sub => {
      res.json({ sub });
    })
    .catch(console.error);
});

function charge(amount, service, token) {
  return new Promise((resolve, reject) => {
    stripe.charges.create(
      {
        amount: amount,
        currency: "usd",
        description: service,
        source: token
      },
      (error, charge) => {
        if (error) {
          reject(error);
        } else {
          resolve(charge);
        }
      }
    );
  });
}

app.post("/charge", (req, res) => {
  charge(parseInt(request.body.amount) * 100, request.body.service, request.body.token)
    .then(charge => {
      response.json({ charge });
    })
    .catch(next);
});

app.get("/featured", (req, res) => {
  queries
    .listFeatures()
    .then(features => {
      res.json(features);
    })
    .catch(console.err);
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

app.get("/all-submissions", (req, res) => {
  queries
    .listSubmissions()
    .then(subs => res.json(subs))
    .catch(console.error);
});

app.get("/all-submissions/:type", (req, res) => {
  queries
    .listSubmissionsByType(req.params.type)
    .then(subs => res.json(subs))
    .catch(console.error);
});

app.use((request, response) => {
  response.sendStatus(404);
});

module.exports = app;
