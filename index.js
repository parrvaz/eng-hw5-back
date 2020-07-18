const express = require("express");
var cors = require("cors");
const body_parser = require("body-parser");
const logger = require("./logger");

const forms = require("./forms/form");

const app = express();

app.use(cors());
app.use(body_parser.json());
app.use(express.json());

const dotenv = require("dotenv");
dotenv.config();

const port = process.env.PORT || 8000;

app.use("/api/forms", forms);

app.get("/", function (req, res) {
  res.send("Hi!");
});

app.listen(port, () => console.log(`Example app ${port}`));
