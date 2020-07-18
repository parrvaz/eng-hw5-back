var express = require("express");
var router = express.Router();
const validations = require("../module/validations");
const putDB = require("../database/putDB");
const getDB = require("../database/getDB");
const logger = require("../logger");

router.use("/addForm", function (req, res, next) {
  logger.log("info", `${req.method} request`);
  if (req.method.toString() !== "PUT") {
    logger.log("error", `incorrect request method=>${req.method}`);
    return res.status(400).json({
      status: "error",
      message: "The method for this request must be put",
    });
  }

  //validation of form

  next();
});

router.put("/addForm", function (req, res) {
  const form = req.body;

  let result = putDB.addForm(form);

  res.status(200).send(result);
});

router.post("/:formId", function (req, res) {
  const formData = req.body;
  console.log(formData);
  logger.log("info", `new formDate:\n\t\t ${formData}`);

  res.status(200).send(formData);
});

router.use("/", function (req, res, next) {
  logger.log("info", `${req.method} request`);
  if (req.method.toString() !== "GET") {
    logger.log("error", `incorrect request method=>${req.method}`);
    return res.status(400).json({
      status: "error",
      message: "The method for this request must be get",
    });
  }

  next();
});

//get forms
router.get("/", function (req, res) {
  //searche
  let result = getDB.getForms();
  //return response
  if (result.length == 0) {
    logger.log("info", `there is no form`);
    return res.json({
      status: "error",
      message: "there is no form",
    });
  }
  res.json(result);
});

router.get("/:formId", function (req, res) {
  const formId = req.params.formId;

  let result = getDB.getSingleForm(formId);

  if (result == false) {
    logger.log("info", `there is no form wiht id:${formId}`);
    return res.json({
      status: "error",
      message: "id is incorrect",
    });
  }

  res.status(200).send(result);
});

module.exports = router;
