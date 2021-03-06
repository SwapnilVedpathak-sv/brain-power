const express = require("express");
const mongoose = require("mongoose");
const compression = require("compression");
var router = express.Router();
const bodyParse = require("body-parser");
const JsonData = bodyParse.json();
// const multer = require('multer');
const app = express();
const path = require("path");
const cors = require("cors");
const header = require("./middleware/header");
const AllCertificateData = require("./models/expence");
require("./database/databaseConnection");
const PORT = process.env.PORT || 3000;

require("dotenv").config();

const authRouter = require("./routes/authRoutes/authRoutesForUser");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(express.static("./dist/brainPower"));
app.use(cors({ origin: "*" }));
app.use(header);
app.use(compression());
app.use("/", authRouter);
app.use("/", authRouter);

app.get("/", (req, res) => {
  res.sendFile(path.resolve(__dirname, "./src", "index.html"));
});


// Post Request For Create Student

app.post("/brainPowerData", (req, res) => {
  const postRequest = new AllCertificateData(req.body);
  postRequest
    .save()
    .then(() => {
      res.status(201).send(postRequest);
    })
    .catch((e) => {
      res.status(400).send(e);
    });
});

// Get Request For All Student

app.get("/brainPowerData", async (req, res) => {
  try {
    const getAllData = await AllCertificateData.find();
    // console.log(getExpencesData);
    res.status(200).send(getAllData);
  } catch (e) {
    res.status(501).send(e);
  }
});

// Get Request For Only Single Student

app.get("/brainPowerData/:id", async (req, res) => {
  try {
    const _id = req.params.id;
    const getSingleData = await AllCertificateData.findById(_id);
    res.send(getSingleData);
  } catch (e) {
    res.send(e);
  }
});

// Put Request For Update Specific Student

app.put("/brainPowerData/:id", async (req, res) => {
  try {
    const _id = req.params.id;
    const putRequest = await AllCertificateData.findByIdAndUpdate(
      _id,
      req.body,
      {
        new: true,
      }
    );
    res.send(putRequest);
  } catch (e) {
    res.send(e);
  }
});

// Patch Request For Update Specific Student

app.patch("/brainPowerData/:id", async (req, res) => {
  try {
    const _id = req.params.id;
    const patchRequest = await AllCertificateData.findByIdAndUpdate(
      _id,
      req.body,
      {
        new: true,
      }
    );
    res.send(patchRequest);
  } catch (e) {
    res.send(e);
  }
});

// Delete Request For Delete Specific Student

app.delete("/brainPowerData/:id", async (req, res) => {
  try {
    const _id = req.params.id;
    const deleteRequest = await AllCertificateData.findByIdAndDelete(_id);
    res.send(deleteRequest);
  } catch (e) {
    res.send(e);
  }
});

app.listen(PORT, () => {
  console.log(`Connection is setup at ${PORT}`);
});
